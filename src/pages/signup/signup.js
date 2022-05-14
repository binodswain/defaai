import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import styles from "./signup.module.scss";

export default function Signup() {
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
        <div className={styles.signup}>
            <h1>Create an account</h1>

            <section className={styles.signup__form}>
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
