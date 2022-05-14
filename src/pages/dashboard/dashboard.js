// import styles from "./dashboard.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppContentLayout } from "../../components/layout/Layout";
import { PageContent, PageHeader } from "../../features/dashboard/dashboard";
import { fetchUsersAsync } from "../../features/dashboard/dashboardSlice";

function Dashboard() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsersAsync());
    }, [dispatch]);

    return (
        <AppContentLayout>
            <PageHeader />
            <PageContent />
        </AppContentLayout>
    );
}

export default Dashboard;
