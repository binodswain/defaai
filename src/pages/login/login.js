import {
    AuthpageHeader,
    AuthPageLayout,
    LoginContent,
} from "../../features/auth/Auth";

export default function Login() {
    return (
        <AuthPageLayout>
            <AuthpageHeader>
                <h1>Sign in</h1>
            </AuthpageHeader>
            <LoginContent />
        </AuthPageLayout>
    );
}
