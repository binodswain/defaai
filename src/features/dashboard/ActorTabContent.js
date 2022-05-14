import { useDispatch, useSelector } from "react-redux";
import { getDashboardModule, selectUser } from "./dashboardSlice";
import styles from "./dashboard.module.scss";
import cn from "classnames";

export default function ActorTabContent() {
    const dashboardModule = useSelector(getDashboardModule);
    const { actor } = dashboardModule;
    const dispatch = useDispatch();

    const handleActorSelect = (user) => {
        dispatch(selectUser(user));
    };

    return (
        <section className={styles.actorlist}>
            {actor.data &&
                actor.data.map((user) => {
                    const { name, picture, email } = user;
                    const { email: email_selected } = actor.selected || {};
                    const isSelected = email === email_selected;

                    const clsName = cn(styles.user__wrapper, {
                        [styles.user__selected]: isSelected,
                    });

                    return (
                        <div
                            className={clsName}
                            key={email}
                            onClick={() => handleActorSelect(user)}
                        >
                            <img
                                className={styles.user__image}
                                src={picture.large}
                                alt=""
                            />
                            <div className={styles.user__name}>
                                {name.first}
                            </div>
                        </div>
                    );
                })}
        </section>
    );
}
