import React, { useMemo, useState, useRef,useCallback, useEffect } from "react";
import {
    SandpackCodeEditor,
    SandpackLayout,
    SandpackPreview,
    SandpackProvider,
    useSandpack,
} from "@codesandbox/sandpack-react";

import { detectDependencies } from "../utils/sandpackUtils";
import { useAppContext } from "../context/AppContext";
import SandpackErrorMonitor from "./SandpackErrorMonitor";

// Watches for file edits inside Sandpack editor
// and syncs changes to live state + DB.
function SandpackFileWatcher({ onLiveFileChange }) {
    const { sandpack } = useSandpack();
    const { files } = sandpack;

    const lastFilesRef = useRef(null);

    useEffect(() => {
        const updatedFiles = {};

        for (const [path, fileObj] of Object.entries(files)) {
            updatedFiles[path] = fileObj.code;
        }

        // Prevent update loop
        const currentFilesString = JSON.stringify(updatedFiles);

        if (lastFilesRef.current === currentFilesString) {
            return;
        }

        lastFilesRef.current = currentFilesString;

        onLiveFileChange(updatedFiles);
    }, [files, onLiveFileChange]);

    return null;
}

function SandpackActiveFileSync({ activeFile, onActiveFileChange }) {
    const { sandpack } = useSandpack();
    const sandpackRef = useRef(sandpack);
    const pendingActiveFileRef = useRef(null);
    sandpackRef.current = sandpack;

    useEffect(() => {
        const currentSandpack = sandpackRef.current;
        if (activeFile && currentSandpack.files[activeFile] && currentSandpack.activeFile !== activeFile) {
            pendingActiveFileRef.current = activeFile;
            currentSandpack.setActiveFile(activeFile);
        }
    }, [activeFile]);

    useEffect(() => {
        if (pendingActiveFileRef.current) {
            if (sandpack.activeFile === pendingActiveFileRef.current) {
                pendingActiveFileRef.current = null;
            }
            return;
        }

        if (sandpack.activeFile && sandpack.activeFile !== activeFile) {
            onActiveFileChange(sandpack.activeFile);
        }
    }, [activeFile, onActiveFileChange, sandpack.activeFile]);

    return null;
}

const PreviewPanel = ({ project, activeFile, showCode, onActiveFileChange }) => {
    const [showErrorOverlay, setShowErrorOverlay] = useState(true);

    const [liveFiles, setLiveFiles] = useState(project.files);

    const projectKey = `${project._id}-${project.version}`;

    // Reset live files when switching projects/versions
    useEffect(() => {
        setLiveFiles(project.files);
    }, [projectKey]);

   const handleLiveFilesChange = useCallback((newFiles) => {
    setLiveFiles((prev) => {
        const prevKeys = Object.keys(prev || {});
        const newKeys = Object.keys(newFiles || {});

        // Different number of files
        if (prevKeys.length !== newKeys.length) {
            return newFiles;
        }

        // Check both file paths and contents
        for (const path of newKeys) {
            if (!(path in prev) || prev[path] !== newFiles[path]) {
                return newFiles;
            }
        }

        // Nothing actually changed
        return prev;
    });
}, []);

    // Convert live files to Sandpack format
    const sandpackFiles = useMemo(() => {
        const spFiles = {};

        for (const [path, content] of Object.entries(liveFiles || {})) {
            const fileCode =
                typeof content === "string"
                    ? content
                    : content?.content || "";

            spFiles[path] = {
                code: fileCode,
                active: path === activeFile,
            };
        }

        return spFiles;
    }, [liveFiles, activeFile]);

    // Detect dependencies from imports
    const dependencies = useMemo(() => {
        return detectDependencies(liveFiles);
    }, [liveFiles]);

    return (
        <div className="h-full w-full">
            <SandpackProvider
                key={projectKey}
                template="react"
                files={sandpackFiles}
                customSetup={{
                    dependencies,
                }}
                options={{
                    externalResources: [
                        "https://cdn.tailwindcss.com",
                        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
                    ],
                    classes: {
                        "sp-wrapper": "sp-wrapper",
                        "sp-layout": "sp-layout",
                        "sp-preview": "sp-preview",
                    },
                    logLevel: 0,
                }}
                theme={{
                    colors: {
                        surface1: "#ffffff",
                        surface2: "#f4f4f5",
                        surface3: "#e4e4e7",
                        clickable: "#71717a",
                        base: "#09090b",
                        disabled: "#a1a1aa",
                        hover: "#18181b",
                        accent: "#18181b",
                        error: "#ef4444",
                        errorSurface: "#fef2f2",
                    },
                    font: {
                        body: "'Urbanist', system-ui, -apple-system, sans-serif",
                        mono: "'Geist Mono', ui-monospace, monospace",
                        size: "13px",
                        lineHeight: "1.6",
                    },
                }}
            >
                <SandpackActiveFileSync
                    activeFile={activeFile}
                    onActiveFileChange={onActiveFileChange}
                />
                <SandpackFileWatcher
                    onLiveFileChange={handleLiveFilesChange}
                />

                <SandpackErrorMonitor
                    onErrorChange={setShowErrorOverlay}
                />

                <SandpackLayout
                    style={{
                        height: "100%",
                        border: "none",
                        borderRadius: 0,
                        background: "transparent",
                    }}
                >
                    {showCode && (
                        <SandpackCodeEditor
                            showTabs
                            showLineNumbers
                            showInlineErrors
                            wrapContent
                            style={{
                                height: "100%",
                                flex: 1,
                                minWidth: 0,
                            }}
                        />
                    )}

                    <SandpackPreview
                        showNavigator={false}
                        showRefreshButton
                        showOpenInCodeSandbox={false}
                        showSandpackErrorOverlay={showErrorOverlay}
                        style={{
                            height: "100%",
                            flex: showCode ? 1 : 2,
                            minWidth: 0,
                        }}
                    />
                </SandpackLayout>
            </SandpackProvider>
        </div>
    );
};

export default PreviewPanel;