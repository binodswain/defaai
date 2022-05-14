import { useDispatch, useSelector } from "react-redux";
import {
    getDashboardModule,
    selectAlignment,
    selectVoice,
} from "./dashboardSlice";
import styles from "./dashboard.module.scss";
import cn from "classnames";

export default function AlignmentTabContent() {
    const dashboardModule = useSelector(getDashboardModule);
    const {
        isLoading,
        alignment: { data, selected: selectedAlignment },
    } = dashboardModule;
    const dispatch = useDispatch();

    const handleAlignmentSelect = (alignment) => {
        dispatch(selectAlignment(alignment));
    };

    return (
        <section className={styles.alignmentlist}>
            {data.map((alignment) => {
                const isSelected = alignment === selectedAlignment;
                const clsName = cn(styles.alignment__wrapper, {
                    [styles.alignment__selected]: isSelected,
                });
                return (
                    <button
                        className={clsName}
                        key={alignment}
                        onClick={() => handleAlignmentSelect(alignment)}
                    >
                        {alignment}
                    </button>
                );
            })}
        </section>
    );
}
