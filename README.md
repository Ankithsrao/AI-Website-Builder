# 🚀 AI Website Builder using React and Node.js

> A powerful browser-based React development environment that allows users to create, edit, run, preview, and manage complete React projects directly inside the browser.

[![React](https://img.shields.io/badge/React-18%2B-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Sandpack](https://img.shields.io/badge/Sandpack-CodeSandbox-151515?logo=codesandbox)](https://sandpack.codesandbox.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Utility_First-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

---

## 📖 About the Project

This project is a **AI Website Builder using React and Node.js** designed to provide developers with an interactive coding experience without requiring a locally installed development environment.

Traditional React development usually requires developers to install Node.js, configure a project, install dependencies, open an IDE, start a development server, and manually manage project files.

This application simplifies that workflow by bringing the core development experience directly into the browser.

Users can:

- Create and manage React projects
- Navigate through multiple project files
- Edit source code directly in the browser
- See changes reflected in real time
- Run React applications through Sandpack
- Detect project dependencies automatically
- Monitor runtime errors
- Preview the running application
- Manage project versions and files
- Work with complete multi-file React projects

The project combines **React**, **Sandpack**, application-level state management, custom utilities, and a responsive user interface to create an interactive development workspace.

---

# 🎯 Problem Statement

Setting up a React project locally can involve several steps:

```text
Install Node.js
      ↓
Create React Project
      ↓
Install Dependencies
      ↓
Configure Development Environment
      ↓
Create Project Files
      ↓
Start Development Server
      ↓
Open Browser
      ↓
Start Development
```

For beginners, students, educators, and developers who want to quickly experiment with React code, this process can introduce unnecessary complexity.

This project attempts to simplify the experience by providing:

```text
Open Application
      ↓
Create/Open Project
      ↓
Edit Code
      ↓
Instant Preview
      ↓
Fix Errors
      ↓
Continue Development
```

Everything happens inside the browser.

---

# 💡 Solution

The application provides an integrated development workspace consisting of:

### 📝 Code Editor

A browser-based editor powered by Sandpack where users can modify project files.

### ⚡ Live Preview

A live React runtime that automatically renders the application after code changes.

### 📁 Project Files

Support for multiple files and nested folders instead of restricting users to a single source file.

### 📦 Dependency Detection

The application analyzes imported packages and dynamically configures the Sandpack environment.

### 🐛 Error Monitoring

Runtime errors are monitored and presented to the user through an error overlay.

### 🔄 Live Synchronization

Changes made inside the editor are synchronized with the application's internal project state.

---

# ✨ Features

## 1. 🧑‍💻 Browser-Based React Development

The primary purpose of this application is to provide a development environment directly inside the browser.

Users don't need to open a traditional IDE for basic React experimentation.

The application provides:

```text
┌─────────────────────────────────────────────┐
│              React Workspace                │
├──────────────────────┬──────────────────────┤
│                      │                      │
│    File Explorer     │    Code Editor       │
│                      │                      │
│    App.js            │    React Code        │
│    index.js          │                      │
│    components/       │                      │
│                      │                      │
├──────────────────────┴──────────────────────┤
│                Live Preview                 │
│                                             │
│            Running React App                │
│                                             │
└─────────────────────────────────────────────┘
```

---

# 2. 📝 Live Code Editing

The project uses **Sandpack Code Editor** to provide an interactive development experience.

Users can edit JavaScript, JSX, CSS, HTML, and other supported project files.

For example:

```jsx
function App() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}
```

When the code is changed, the updated file is synchronized with the live project state.

---

# 3. ⚡ Real-Time React Preview

One of the most important features is the live preview.

Instead of manually refreshing the browser, Sandpack executes the React project and updates the preview when source files change.

The basic flow is:

```text
User edits code
       ↓
Sandpack Editor
       ↓
File Change
       ↓
Live File State
       ↓
Sandpack Runtime
       ↓
React Application
       ↓
Live Preview
```

This creates an experience similar to online development platforms and interactive coding environments.

---

# 4. 📁 Multi-File Project Architecture

The application supports complete project structures rather than a single React component.

Example:

```text
React Project
│
├── App.js
├── index.js
├── styles.css
├── package.json
│
├── public/
│   └── index.html
│
└── components/
    ├── Header.js
    ├── Hero.js
    ├── Features.js
    ├── Pricing.js
    ├── Testimonials.js
    ├── CTA.js
    └── Footer.js
```

This allows developers to work with projects that resemble real-world React applications.

---

# 5. 📦 Automatic Dependency Detection

A custom dependency detection utility is used to identify external packages imported by the project.

For example, if a project contains:

```javascript
import axios from "axios";
import { motion } from "framer-motion";
```

the application can identify:

```text
axios
framer-motion
```

and provide the dependencies to Sandpack.

The dependency flow is:

```text
Project Files
     ↓
Source Code Analysis
     ↓
Import Detection
     ↓
Dependency List
     ↓
Sandpack Configuration
     ↓
React Runtime
```

This makes the development environment more flexible because users don't have to manually configure every imported package.

---

# 6. 🐛 Runtime Error Monitoring

React applications can produce runtime errors while users are developing.

The application includes a custom:

```text
SandpackErrorMonitor
```

component responsible for monitoring errors generated by the Sandpack environment.

The flow is:

```text
React Application
       ↓
Runtime Error
       ↓
Sandpack Runtime
       ↓
Error Monitor
       ↓
Application Error State
       ↓
Error Overlay
```

This provides immediate feedback when something goes wrong.

For example:

```jsx
const user = undefined;

return <h1>{user.name}</h1>;
```

The runtime error can be detected and displayed through the preview error interface.

---

# 7. 🔄 Live File Synchronization

The application maintains a separate live representation of project files.

The main state is:

```javascript
const [liveFiles, setLiveFiles] = useState(project.files);
```

The application then converts these files into the format required by Sandpack.

```text
Project Files
      ↓
liveFiles
      ↓
sandpackFiles
      ↓
SandpackProvider
```

When the developer edits a file:

```text
Editor
  ↓
Sandpack Files
  ↓
SandpackFileWatcher
  ↓
Updated Files
  ↓
liveFiles
```

This creates a continuous synchronization loop between the editor and application state.

---

# 8. 🛡️ Update Loop Prevention

One of the technical challenges encountered during development was preventing unnecessary React renders and infinite update loops.

A naive implementation could create a cycle like:

```text
Sandpack Files
      ↓
File Watcher
      ↓
setLiveFiles()
      ↓
React Render
      ↓
New Sandpack Files
      ↓
File Watcher
      ↓
setLiveFiles()
      ↓
React Render
      ↓
...
```

This can result in:

```text
Maximum update depth exceeded
```

To prevent this, the application uses:

- Stable callback references
- File-content comparison
- Previous-state tracking
- Controlled effects
- Memoized derived data
- Guarded state updates

The file watcher stores the previous file state:

```javascript
const lastFilesRef = useRef("");
```

Before updating the application state, it compares the current files with the previous state.

```javascript
const currentFilesString = JSON.stringify(updatedFiles);

if (lastFilesRef.current === currentFilesString) {
    return;
}
```

Only actual file changes trigger state updates.

This significantly reduces unnecessary renders and prevents recursive update cycles.

---

# 🏗️ Application Architecture

The application follows a component-based React architecture.

```text
                         React Application
                                │
                                ▼
                         App / Main Layer
                                │
                                ▼
                         AppContext
                                │
                                ▼
                         PreviewPanel
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
              ▼                 ▼                 ▼
        Code Editor         Preview         Error Monitor
              │                 │                 │
              └────────┬────────┘                 │
                       ▼                          │
                Sandpack Runtime ◄───────────────┘
                       │
                       ▼
                React Application
```

---

# 🔄 Complete Data Flow

The complete file lifecycle can be represented as:

```text
Project
   │
   │ project.files
   ▼
liveFiles
   │
   │ useMemo
   ▼
sandpackFiles
   │
   ▼
SandpackProvider
   │
   ├───────────────┐
   │               │
   ▼               ▼
Code Editor      Preview
   │
   │ User edits file
   ▼
Sandpack Files
   │
   ▼
SandpackFileWatcher
   │
   ▼
handleLiveFilesChange
   │
   ▼
liveFiles
   │
   └──────────────► Preview Updates
```

---

# 🧩 Core Components

## `PreviewPanel`

The `PreviewPanel` is the central component connecting the application state with Sandpack.

### Responsibilities

- Maintain live file state
- Convert project files into Sandpack format
- Detect dependencies
- Render the Sandpack provider
- Render the code editor
- Render the preview
- Manage error overlay state
- Handle active files
- Synchronize project versions

---

## `SandpackFileWatcher`

The file watcher monitors files managed by Sandpack.

Its main responsibilities are:

- Read Sandpack files
- Extract source code
- Detect changes
- Avoid duplicate updates
- Notify the parent component

Simplified architecture:

```text
Sandpack
   ↓
useSandpack()
   ↓
files
   ↓
SandpackFileWatcher
   ↓
File Comparison
   ↓
onLiveFileChange()
```

---

## `SandpackErrorMonitor`

The error monitor observes runtime errors from the Sandpack environment.

It allows the main application to control whether the error overlay is displayed.

---

## `detectDependencies`

A utility responsible for analyzing project source code and identifying external dependencies.

This allows dynamic configuration of:

```javascript
customSetup={{
    dependencies,
}}
```

inside Sandpack.

---

## `AppContext`

The application context provides shared project-level state and actions.

It helps coordinate information between different parts of the application without requiring deeply nested prop passing.

---

# 🛠️ Technology Stack

## Frontend Technologies

### React.js

**Purpose:** Core UI framework.

React is used to build the application's component-based architecture.

Major components include:

- Preview panel
- Editor interface
- Project interface
- Error handling interface
- File management interface

---

### JavaScript ES6+

**Purpose:** Application logic.

Modern JavaScript features are used throughout the project, including:

- Arrow functions
- Destructuring
- Template literals
- Object methods
- Array methods
- Modules
- Optional chaining
- Modern React patterns

---

### HTML5

**Purpose:** Application structure and document markup.

HTML provides the structural foundation for the browser application and the projects running inside Sandpack.

---

### CSS3

**Purpose:** Styling and layout.

CSS is used for custom styling, layout behavior, responsive design, and visual presentation.

---

### Tailwind CSS

**Purpose:** Utility-first styling.

Tailwind CSS is used to rapidly build responsive interfaces using utility classes.

Example:

```jsx
<div className="h-full w-full">
```

This approach makes it easier to maintain consistent spacing, sizing, and responsive layouts.

---

# 🧑‍💻 Sandpack

**Sandpack** is one of the most important technologies used in this project.

Sandpack provides the browser-based development runtime that makes it possible to execute React projects directly inside the application.

The project uses:

```text
@codesandbox/sandpack-react
```

Important Sandpack components include:

### `SandpackProvider`

Provides the Sandpack environment.

```jsx
<SandpackProvider
    template="react"
    files={sandpackFiles}
    customSetup={{
        dependencies,
    }}
>
```

### `SandpackCodeEditor`

Provides the interactive code editor.

```jsx
<SandpackCodeEditor />
```

### `SandpackPreview`

Displays the running React application.

```jsx
<SandpackPreview />
```

### `useSandpack`

Provides access to Sandpack state and functionality.

```javascript
const { sandpack } = useSandpack();
```

---

# 🎨 UI & Styling

The project includes a customized Sandpack theme.

Example configuration:

```javascript
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
    }
}}
```

This allows Sandpack's editor and preview interface to visually integrate with the rest of the application.

---

# 🌐 External Resources

The Sandpack environment can load external resources.

Currently configured resources include:

```text
Tailwind CSS
Font Awesome
```

Example:

```javascript
externalResources: [
    "https://cdn.tailwindcss.com",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
]
```

### Tailwind CSS CDN

Used to make Tailwind utilities available to projects running inside the Sandpack environment.

### Font Awesome

Used to provide icon support for React projects.

---

# 📦 Technology Summary

| Technology | Role | Why It Is Used |
|---|---|---|
| React | Frontend framework | Build interactive UI |
| JavaScript | Programming language | Application logic |
| HTML5 | Markup | Structure |
| CSS3 | Styling | Custom styling |
| Tailwind CSS | UI styling | Responsive utility classes |
| Sandpack | Browser runtime | Execute React projects |
| Sandpack React | React integration | Editor and preview components |
| React Hooks | Application logic | Manage component state and lifecycle |
| Context API | Shared state | Manage project-level data |
| Font Awesome | Icons | UI icons |

---

# 📂 Project Structure

A simplified project structure:

```text
src/
│
├── components/
│   ├── PreviewPanel.jsx
│   ├── SandpackErrorMonitor.jsx
│   └── ...
│
├── context/
│   └── AppContext.jsx
│
├── utils/
│   └── sandpackUtils.js
│
├── App.jsx
├── main.jsx
└── ...
```

---

# ⚙️ Installation & Setup

## Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

Check your versions:

```bash
node --version
npm --version
git --version
```

---

## Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

---

## Navigate to the Project

```bash
cd YOUR_REPOSITORY
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

The application will start using the development server configured in the project.

---

# 🧪 Development Workflow

A typical development workflow looks like:

```text
1. Open Application
        ↓
2. Select/Create Project
        ↓
3. Open Project Files
        ↓
4. Edit React Code
        ↓
5. Sandpack Detects Changes
        ↓
6. Application Synchronizes Files
        ↓
7. React Application Rebuilds
        ↓
8. Preview Updates
        ↓
9. Runtime Errors Are Monitored
```

---

# 🧠 Important Engineering Decisions

## Why Sandpack?

Sandpack provides the ability to run development environments directly in the browser.

Instead of manually implementing:

- JavaScript compilation
- Module resolution
- React runtime execution
- Preview rendering
- Dependency handling

the project can leverage Sandpack's browser-based development infrastructure.

---

## Why `useMemo`?

The Sandpack file configuration is derived from application state.

Instead of recreating it unnecessarily on every render:

```javascript
const sandpackFiles = useMemo(...)
```

is used to calculate the configuration only when relevant values change.

---

## Why `useCallback`?

Callbacks passed into effects can cause effects to execute repeatedly if the function reference changes on every render.

Using:

```javascript
useCallback(...)
```

keeps the callback stable.

This is particularly important for:

```text
SandpackFileWatcher
        ↓
onLiveFileChange
```

---

## Why `useRef`?

The file watcher needs to remember the previous file state without triggering another React render.

Therefore:

```javascript
const lastFilesRef = useRef("");
```

is used.

---

# 🐛 Challenges & Solutions

## Challenge 1 — Infinite React Update Loop

During development, the application encountered:

```text
Maximum update depth exceeded
```

The problem occurred because changes in Sandpack could trigger state changes, which caused a new render, which caused another Sandpack update.

### Solution

The application was redesigned to:

- Compare file contents
- Avoid redundant state updates
- Use stable callbacks
- Use `useRef` to track previous state
- Carefully manage effect dependencies

---

## Challenge 2 — Synchronizing Sandpack and Application State

Sandpack maintains its own representation of project files while the React application maintains another representation.

This creates two states:

```text
Application State
       ↕
Sandpack State
```

A custom file watcher was introduced to synchronize the two without creating unnecessary updates.

---

## Challenge 3 — Dynamic Dependencies

Projects can import different npm packages.

Hard-coding dependencies would make the application difficult to scale.

Therefore, a dependency detection utility was implemented to analyze imports and dynamically configure Sandpack.

---

# 📈 Performance Considerations

The project uses several techniques to reduce unnecessary rendering.

### Memoization

```javascript
useMemo()
```

is used for derived data.

### Stable Callbacks

```javascript
useCallback()
```

prevents callback references from changing unnecessarily.

### Persistent References

```javascript
useRef()
```

stores previous file state.

### State Comparison

The application compares file contents before updating state.

These techniques are particularly important because code editors and live previews can generate frequent updates.

---

# 🔒 Security Considerations

This application executes user-provided JavaScript and React code inside a browser-based runtime.

When deploying the application publicly, consider:

- Content Security Policy
- Sandboxing
- Dependency restrictions
- External resource restrictions
- Authentication
- Authorization
- API validation
- Rate limiting
- Secure backend APIs

User-generated code should never be executed directly on a server without an appropriate isolation mechanism.

---

# 🚀 Future Improvements

The current implementation provides the foundation for a complete online development environment.

Possible future improvements include:

### Project Management

- Create projects
- Delete projects
- Rename projects
- Duplicate projects
- Project templates
- Project search
- Project sorting

### Editor Improvements

- Syntax highlighting
- Auto-completion
- Code formatting
- Prettier integration
- ESLint integration
- Keyboard shortcuts
- Search and replace
- Multi-tab editing

### Collaboration

- Real-time collaborative editing
- Project sharing
- Public project URLs
- Team workspaces
- User permissions

### Git Integration

- GitHub authentication
- Repository import
- Commit changes
- Push changes
- Pull changes
- Branch management

### AI Features

- AI code generation
- AI debugging
- Code explanation
- Error analysis
- Refactoring suggestions
- Automatic documentation generation

### Export

- Download project as ZIP
- Export project to GitHub
- Generate deployment configuration
- Project backup and restore

---

# 📸 Screenshots

Add screenshots of the actual application here.

Recommended screenshots:

### Dashboard

```markdown
![Dashboard](./screenshots/dashboard.png)
```

### Code Editor

```markdown
![Code Editor](./screenshots/editor.png)
```

### Live Preview

```markdown
![Live Preview](./screenshots/preview.png)
```

### Error Monitoring

```markdown
![Error Monitor](./screenshots/error.png)
```

---

# 🎥 Demo

Add your deployed application here:

```text
Live Demo:
https://your-domain.com
```

You can also add a demonstration video showing:

```text
Create Project
      ↓
Open Project
      ↓
Edit Component
      ↓
Preview Changes
      ↓
Introduce Error
      ↓
View Error
      ↓
Fix Error
      ↓
Continue Development
```

---

# 🤝 Contributing

Contributions are welcome.

## Fork the repository

Create a fork of the project on GitHub.

## Clone your fork

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

## Create a feature branch

```bash
git checkout -b feature/new-feature
```

## Make your changes

Implement your feature or fix.

## Commit your changes

```bash
git add .
git commit -m "Add new feature"
```

## Push your branch

```bash
git push origin feature/new-feature
```

Create a Pull Request from your branch to the main repository.

---

# 📜 License

This project is licensed under the MIT License.

See the `LICENSE` file for additional information.

---

# 👨‍💻 Author

## YOUR NAME

Developer passionate about building modern web applications and developer tools.

### Connect

- GitHub: `https://github.com/YOUR_USERNAME`
- LinkedIn: `https://linkedin.com/in/YOUR_USERNAME`
- Portfolio: `https://your-portfolio.com`

---

# ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

Your support helps improve and extend the project.

---

# 🙏 Acknowledgements

This project was made possible by several excellent open-source technologies and developer tools.

Special thanks to:

- **React** — For the component-based frontend architecture
- **CodeSandbox Sandpack** — For providing the browser-based development runtime
- **Tailwind CSS** — For the utility-first styling system
- **Font Awesome** — For icon resources
- **JavaScript ecosystem** — For the tools and libraries that make browser-based development possible

---

# 📌 Project Summary

This project demonstrates how a browser can be transformed into an interactive React development environment.

The core architecture combines:

```text
React
  +
Sandpack
  +
Live File Synchronization
  +
Dependency Detection
  +
Error Monitoring
  +
State Management
  +
Responsive UI
```

The result is a development environment where users can write React code, manage multiple project files, execute the application, observe changes instantly, and identify runtime errors without leaving the browser.

---

# ⭐ Key Takeaways

This project demonstrates practical implementation of:

- React component architecture
- React Hooks
- State management
- Context API
- Memoization
- Callback optimization
- Browser-based code execution
- Sandpack integration
- Dynamic dependency detection
- Multi-file project management
- Runtime error monitoring
- Real-time preview systems
- State synchronization
- Infinite render-loop prevention
- Responsive UI development

It serves as a foundation that can be extended into a more complete online IDE, collaborative coding platform, or AI-powered development environment.
