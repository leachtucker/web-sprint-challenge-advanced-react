import { useState } from "react"

const useDarkmode = () => {
    const [darkmode, setDarkmode] = useState(true);

    const toggleDarkmode = () => {
        setDarkmode(!darkmode);
    }

    return {darkmode, toggleDarkmode};
}

export default useDarkmode;