import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./login.module.scss";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../features/auth/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Button from "../../components/button/Button";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useAuth();

    useEffect(() => {
        if (user) {
            // redirect to dashboard if user is logged in
            navigate("/dashboard");
        }
    }, [user, navigate]);

    const onSubmit = (data) => {
        dispatch(loginAsync(data));
    };

    return (
        <div className={styles.login}>
            <h1>Login</h1>

            <section className={styles.login__form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.form__element}>
                        <label htmlFor="email">Email address</label>
                        <input
                            placeholder="Enter your email"
                            type="email"
                            name="email"
                            id="email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && (
                            <span className={styles.error}>
                                Email is required
                            </span>
                        )}
                    </div>
                    <div className={styles.form__element}>
                        <label htmlFor="password">password</label>
                        <input
                            placeholder="Enter your password"
                            type="password"
                            name="password"
                            id="password"
                            {...register("password", { required: true })}
                        />
                        {errors.password && (
                            <span className={styles.error}>
                                Password is required
                            </span>
                        )}
                    </div>
                    <div className={styles.form__element}>
                        <Button isPrimary small center type="submit">
                            Login
                        </Button>
                    </div>
                    <p>
                        New here? <Link to={"/signup"}>Signup</Link>
                    </p>
                </form>
            </section>
        </div>
    );
}
