import { useDispatch } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../auth/authSlice";
import styles from "./account.module.scss";

export function AccountPageHeader() {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };
    return (
        <header className={styles.header}>
            <div className={styles.header__left}>
                <h1>My Account</h1>
            </div>
            <div className={styles.header__right}>
                <button className={styles.logout} onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </header>
    );
}

export function AccountContent() {
    const activeClassName = styles.tabs__active;
    return (
        <div>
            <ul className={styles.tabs}>
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                        to=""
                        end
                    >
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="plan"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        <span>My Plan</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="billing"
                        className={({ isActive }) =>
                            isActive ? activeClassName : undefined
                        }
                    >
                        <span>Billing</span>
                    </NavLink>
                </li>
            </ul>
            <Outlet />
        </div>
    );
}
