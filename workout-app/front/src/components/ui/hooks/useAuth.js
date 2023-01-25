import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

export const useAuth = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return{
    isAuth,
    setIsAuth,    
    }
}