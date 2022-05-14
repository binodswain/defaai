import { AppContentLayout } from "../../components/layout/Layout";
import {
    AccountContent,
    AccountPageHeader,
} from "../../features/account/Account";

function Account() {
    return (
        <AppContentLayout>
            <AccountPageHeader />
            <AccountContent />
        </AppContentLayout>
    );
}

export default Account;
