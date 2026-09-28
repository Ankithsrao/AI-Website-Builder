import { useSandpack } from '@codesandbox/sandpack-react'
import React,{useEffect} from 'react'

const SandpackErrorMonitor = ({onErrorChange}) => {
    const {sandpack} = useSandpack()
    const {error} = sandpack;
    const safeOnErrorChange = typeof onErrorChange === 'function' ? onErrorChange : () => {};

    useEffect(()=>{
        if(error){
            const msg = error.message || "";
            const isNetworkError = 
            msg.includes("Failed to fetch") ||
            msg.includes("col.csbops.io") ||
            msg.includes("ERR_CONNECTION_TIMED_OUT") ||
            msg.includes("net::ERR");

            if(isNetworkError){
                safeOnErrorChange(false);
                return
            }
        }
        safeOnErrorChange(true)
    },[error, safeOnErrorChange])
  return null
}

export default SandpackErrorMonitor