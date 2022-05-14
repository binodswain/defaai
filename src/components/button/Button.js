import cn from "classnames";
import styles from "./Button.module.scss";

export default function Button({
    children,
    isPrimary,
    isSecondary,
    small,
    center,
    ...restProps
}) {
    const clsName = cn(styles.button, {
        [styles.primary]: isPrimary,
        [styles.secondary]: isSecondary,
        [styles.small]: small,
        [styles.center]: center,
    });
    return (
        <button className={clsName} {...restProps}>
            {children}
        </button>
    );
}
