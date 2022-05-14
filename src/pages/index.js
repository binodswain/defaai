import React from "react";
import { Routes, Route, NavLink, Link, Navigate } from "react-router-dom";

import Dashboard from "./dashboard/dashboard";
import SignUp from "./signup/signup";
import Login from "./login/login";
import SavedVideos from "./savedvideos/savedvideos";
import Account from "./account/account";
import MyBilling from "../features/account/Billing";
import MyProfile from "../features/account/MyProfile";
import MyPlan from "../features/account/MyPlan";
import { ProtectedLayout } from "../components/layout/Layout";
import { useAuth } from "../hooks/useAuth";

export default function App() {
    const user = useAuth();
    const activeClassName = "active";
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <img src="/applogo.png" alt="logo" />
                        </Link>
                    </li>

                    {user && (
                        <>
                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) =>
                                        isActive ? activeClassName : undefined
                                    }
                                >
                                    <span className="material-symbols-outlined">
                                        videocam
                                    </span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/savedvideos"
                                    className={({ isActive }) =>
                                        isActive ? activeClassName : undefined
                                    }
                                >
                                    <span className="material-symbols-outlined">
                                        video_library
                                    </span>
                                </NavLink>
                            </li>
                        </>
                    )}
                </ul>

                {user && (
                    <ul>
                        <li>
                            <NavLink to="/account">
                                <img src="/userlogo.png" alt="user logo" />
                            </NavLink>
                        </li>
                    </ul>
                )}
            </nav>

            <Routes>
                <Route path="/" element={<Navigate replace to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedLayout>
                            <Dashboard />
                        </ProtectedLayout>
                    }
                />
                <Route
                    path="/savedvideos"
                    element={
                        <ProtectedLayout>
                            <SavedVideos />
                        </ProtectedLayout>
                    }
                />
                <Route
                    path="account"
                    element={
                        <ProtectedLayout>
                            <Account />
                        </ProtectedLayout>
                    }
                >
                    <Route
                        index
                        element={
                            <ProtectedLayout>
                                <MyProfile />
                            </ProtectedLayout>
                        }
                    />
                    <Route
                        path="billing"
                        element={
                            <ProtectedLayout>
                                <MyBilling />
                            </ProtectedLayout>
                        }
                    />
                    <Route
                        path="plan"
                        element={
                            <ProtectedLayout>
                                <MyPlan />
                            </ProtectedLayout>
                        }
                    />
                </Route>
            </Routes>
        </>
    );
}
