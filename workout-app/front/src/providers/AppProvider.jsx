import { useState } from "react";
import { AuthContext } from "../components/ui/Contexts/AuthContext";
import Routes from '../Routes'

const AppProvider = () => {
    const [isAuth, setIsAuth] = useState(false)

    return(
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <Routes/>
        </AuthContext.Provider>
    )
}

export default AppProvider