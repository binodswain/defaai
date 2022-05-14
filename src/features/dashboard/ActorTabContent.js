import { useDispatch, useSelector } from "react-redux";
import { getDashboardModule, selectUser } from "./dashboardSlice";
import styles from "./dashboard.module.scss";
import cn from "classnames";
import TabOption from "../../components/tabOption/TabOption";

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

                    return (
                        <TabOption
                            key={email}
                            isSelected={isSelected}
                            image={picture.large}
                            name={name.first}
                            onClick={() => handleActorSelect(user)}
                        />
                    );
                })}
        </section>
    );
}
