import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAccountAsync,
    getAccountModule,
    updatePlanAsync,
} from "./accountSlice";
import cn from "classnames";
import styles from "./account.module.scss";

const DATA = [
    {
        plan: "free",
        title: "Free",
        features: [
            "Lorem ipsum dolor sit amet",
            "consectetur adipiscing elit",
            "sed do eiusmod tempor ",
            "incididunt ut labore et dolore",
            "Ut enim ad minim veniam",
        ],
        amount: 0,
    },
    {
        plan: "pro",
        title: "Pro",
        features: [
            "Lorem ipsum dolor sit amet",
            "consectetur adipiscing elit",
            "sed do eiusmod tempor ",
            "incididunt ut labore et dolore",
            "Ut enim ad minim veniam",
        ],
        amount: 12,
    },
    {
        plan: "team",
        title: "Team",
        features: [
            "Lorem ipsum dolor sit amet",
            "consectetur adipiscing elit",
            "sed do eiusmod tempor ",
            "incididunt ut labore et dolore",
            "Ut enim ad minim veniam",
        ],
        amount: 23,
    },
    {
        plan: "agency",
        title: "Agency",
        features: [
            "Lorem ipsum dolor sit amet",
            "consectetur adipiscing elit",
            "sed do eiusmod tempor ",
            "incididunt ut labore et dolore",
            "Ut enim ad minim veniam",
        ],
        amount: 43,
    },
];
export default function MyPlan() {
    const accountModule = useSelector(getAccountModule);

    const { plan } = accountModule;

    const dispatch = useDispatch();
    const currentPlan = DATA.find((item) => item.plan === plan);

    useEffect(() => {
        dispatch(fetchAccountAsync());
    }, []);

    if (!currentPlan) {
        return null;
    }

    const handleSelection = (plan) => {
        dispatch(updatePlanAsync(plan));
    };

    return (
        <section className={styles.planlist}>
            {DATA.map((item) => {
                const isSelected = item.plan === plan;
                const clsName = cn(styles.plan, {
                    [styles.current]: isSelected,
                });

                let buttonMarkup = null;

                if (isSelected) {
                    buttonMarkup = (
                        <button
                            onClick={(e) => handleSelection(item.plan)}
                            className={styles.current}
                        >
                            Current Plan
                        </button>
                    );
                } else if (item.amount < currentPlan.amount) {
                    buttonMarkup = (
                        <button
                            onClick={(e) => handleSelection(item.plan)}
                            className={styles.planbutton}
                        >
                            Downgrade
                        </button>
                    );
                } else if (item.amount > currentPlan.amount) {
                    buttonMarkup = (
                        <button
                            onClick={(e) => handleSelection(item.plan)}
                            className={styles.planbutton}
                        >
                            Upgrade
                        </button>
                    );
                }
                return (
                    <div className={clsName} key={item.plan}>
                        <div className={styles.planheader}>
                            <h3 className={styles.planheader_title}>
                                {item.title}
                            </h3>
                        </div>
                        <ul className={styles.planfeatures}>
                            {item.features.map((feature) => {
                                return (
                                    <li
                                        className={styles.planfeature}
                                        key={feature}
                                    >
                                        {feature}
                                    </li>
                                );
                            })}
                        </ul>
                        <div className={styles.amount}>
                            <span className={styles.amount_symbol}>$</span>
                            {item.amount}
                        </div>

                        {buttonMarkup}
                    </div>
                );
            })}
        </section>
    );
}
