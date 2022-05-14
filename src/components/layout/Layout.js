import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function AppContentLayout({ children }) {
    return (
        <div className="app_content">
            <div className="container">{children}</div>;
        </div>
    );
}

export function ProtectedLayout({ children }) {
    const user = useAuth({});
    let location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}
