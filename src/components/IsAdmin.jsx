import { Navigate } from "react-router-dom";
import { compruebaToken } from "../services/usuarios.service";
import { useEffect } from "react";

const IsAdmin = () => {
    useEffect(() => {
        const checkToken = async () => {
            try {
                const isValidToken = await compruebaToken();
                if (!isValidToken) {
                    Navigate("/login");
                }
            } catch (error) {
                console.error("Error checking token:", error);
            }
        };
        checkToken();
    }, []);

    return <Navigate to="/admin" />;
};

export default IsAdmin;
