import styles from "./Option.module.scss";
import cn from "classnames";

const noop = () => {};

export default function TabOption({
    name,
    image,
    video,
    color,
    isSelected,
    onClick = noop,
}) {
    const clsName = cn(styles.wrapper, {
        [styles.selected]: isSelected,
    });

    return (
        <div className={clsName} role="button" onClick={onClick}>
            {image && <img src={image} alt="" className={styles.image} />}
            {color && (
                <div
                    className={styles.coloroption}
                    style={{
                        [`--color-background`]: color,
                    }}
                />
            )}
            {name && (
                <div alt="" className={styles.name}>
                    {name}
                </div>
            )}
        </div>
    );
}
