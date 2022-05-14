import cn from "classnames";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./account.module.scss";
import { fetchBillingAsync, getAccountModule } from "./accountSlice";

export default function MyBilling() {
    const accountModule = useSelector(getAccountModule);

    const { isLoading, billing } = accountModule;


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBillingAsync());
    }, []);

    if (isLoading) {
        return <div>loading...</div>;
    }

    return (
        <section className={styles.billing}>
            <table>
                <thead>
                    <tr>
                        <th>REFERENCE ID</th>
                        <th>DATE</th>
                        <th>AMOUNT</th>
                        <th>INVOICE</th>
                    </tr>
                </thead>
                <tbody>
                    {billing &&
                        billing.map((item) => {
                            const { id, date, invoice, amount } = item;
                            return (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{date}</td>
                                    <td>{amount}</td>
                                    <td>
                                        <span className="material-symbols-outlined">
                                            picture_as_pdf
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </section>
    );
}
