import {
    AuthpageHeader,
    AuthPageLayout,
    SignupContent,
} from "../../features/auth/Auth";

export default function Login() {
    return (
        <AuthPageLayout>
            <AuthpageHeader>
                <h1>Create an account</h1>
            </AuthpageHeader>
            <SignupContent />
        </AuthPageLayout>
    );
}
