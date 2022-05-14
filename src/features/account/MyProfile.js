import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAccountAsync,
    getAccountModule,
    updateAccountAsync,
} from "./accountSlice";
import styles from "./account.module.scss";
import cn from "classnames";
import Button from "../../components/button/Button";
import { useForm } from "react-hook-form";

export default function MyProfile() {
    const accountModule = useSelector(getAccountModule);
    const { isLoading, profile } = accountModule;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAccountAsync());
    }, []);

    const { f_name, l_name, email, profile_pic } = profile || {};
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ defaultValues: { f_name, l_name, email, profile_pic } });

    const onSubmit = (data) => {
        dispatch(updateAccountAsync(data));
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <section className={styles.profile}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className={styles.profile__image}>
                    <img src={profile_pic} alt="" />
                    <span
                        className={cn("material-symbols-outlined", styles.edit)}
                    >
                        edit
                    </span>
                </section>
                <section className={styles.profile__details}>
                    <div className={styles.element}>
                        <label>First Name</label>
                        <input
                            type="text"
                            name="f_name"
                            {...register("f_name", { required: true })}
                        />
                    </div>

                    <div className={styles.element}>
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="l_name"
                            {...register("l_name", { required: true })}
                        />
                    </div>

                    <div className={styles.element}>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            {...register("email", { required: true })}
                        />
                    </div>
                </section>
                <Button type="submit" isPrimary>
                    Save changes
                </Button>
            </form>
        </section>
    );
}
