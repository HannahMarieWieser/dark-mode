import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage"

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("onOff")
    console.log(darkMode);

    useEffect(()=>{
        if(darkMode === true){
            document.body.classList.add("dark-mode")
            console.log("true, added dark-mode")
        }

        else{
            document.body.classList.remove("dark-mode")
            console.log("false, removed dark-mode")
        }

       

    }, [darkMode]) 

    return [darkMode, setDarkMode]
}

export default useDarkMode;