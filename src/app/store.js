import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import dashReducer from "../features/dashboard/dashboardSlice";
import accountReducer from "../features/account/accountSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        dashboard: dashReducer,
        account: accountReducer,
    },
});
