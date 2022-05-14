import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { useAuth } from "../../hooks/useAuth";
import styles from "./Auth.module.scss";
import { loginAsync } from "./authSlice";

export function AuthpageHeader({ children }) {
    return (
        <header>
            <div className="container">{children}</div>
        </header>
    );
}

export function AuthPageLayout({ children }) {
    return <section className={styles.wrapper}>{children}</section>;
}

export function LoginContent() {
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
        <div className={styles.authpage}>
            <section className={styles.authpage__form}>
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
export function SignupContent() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // const dispatch = useDispatch();
    const onSubmit = (data) => {
        // dispatch(signupAsync(data));
    };

    return (
        <div className={styles.authpage}>
            <section className={styles.authpage__form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.form__element}>
                        <label htmlFor="email">Full name</label>
                        <input
                            placeholder="Enter your fullname"
                            type="text"
                            name="f_name"
                            id="f_name"
                            {...register("f_name", { required: true })}
                        />
                        {errors.f_name && (
                            <span className={styles.error}>
                                Full name is required
                            </span>
                        )}
                    </div>
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
                        <label htmlFor="password">New password</label>
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
                        <Button isPrimary small center>
                            Signup
                        </Button>
                    </div>
                    <p>
                        Already user? <Link to={"/login"}>Login</Link>
                    </p>
                </form>
            </section>
        </div>
    );
}
