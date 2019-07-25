import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage"

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("onOff", {status: "false"})
    useEffect(()=>{
        if(useLocalStorage === 'true'){
            var pagebody = document.querySelector("body")
            pagebody.classList.add("dark-mode")
            console.log("true, added dark-mode")
        }

        else{
            var pagebody = document.querySelector("body")
            pagebody.classList.remove("dark-mode")
            console.log("false, removed dark-mode")
        }

        return [darkMode.status, setDarkMode]

    }, [darkMode.status]) 

    
}

export default useDarkMode;