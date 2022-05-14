import { useDispatch, useSelector } from "react-redux";
import {
    getDashboardModule,
    selectBackground,
    selectBackgroundSubTab,
} from "./dashboardSlice";
import styles from "./dashboard.module.scss";
import cn from "classnames";

export default function BackgroundTabContent() {
    const dashboardModule = useSelector(getDashboardModule);
    const {
        isLoading,
        background: { data, selectedSubTab },
    } = dashboardModule;
    const dispatch = useDispatch();

    const handleBackgroundSelect = (background) => {
        dispatch(selectBackground(background));
    };

    const handleSubtabSelect = (subtab) => {
        dispatch(selectBackgroundSubTab(subtab));
    };

    const isImageSelected = selectedSubTab === "image";
    const isVideoSelected = selectedSubTab === "videos";
    const isSolidColorSelected = selectedSubTab === "solidcolor";

    return (
        <section className={styles.backgroundlist}>
            <div
                className={cn(styles.background, {
                    [styles.background__selected]: isImageSelected,
                })}
            >
                <button
                    className={styles.background__trigger}
                    onClick={() => handleSubtabSelect("image")}
                >
                    Image
                    <span>
                        {isImageSelected ? (
                            <span className="material-symbols-outlined">
                                expand_more
                            </span>
                        ) : (
                            <span className="material-symbols-outlined">
                                expand_less
                            </span>
                        )}
                    </span>
                </button>
                <section
                    className={styles.imagelist}
                    hidden={selectedSubTab !== "image"}
                >
                    {data.image.map((background) => {
                        const { name, picture } = background;
                        return (
                            <div
                                className={styles.background__item}
                                key={name}
                                onClick={() =>
                                    handleBackgroundSelect(background)
                                }
                            >
                                <img
                                    className={styles.imagelist__image}
                                    src={picture}
                                    alt=""
                                />
                                <div className={styles.imagelist__name}>
                                    {name}
                                </div>
                            </div>
                        );
                    })}
                </section>
            </div>
            <div
                className={cn(styles.background, {
                    [styles.background__selected]: isSolidColorSelected,
                })}
            >
                <button
                    className={styles.background__trigger}
                    onClick={() => handleSubtabSelect("solidcolor")}
                >
                    Solid colors
                    <span>
                        {isSolidColorSelected ? (
                            <span className="material-symbols-outlined">
                                expand_more
                            </span>
                        ) : (
                            <span className="material-symbols-outlined">
                                expand_less
                            </span>
                        )}
                    </span>
                </button>
                <section
                    className={styles.colorlist}
                    hidden={selectedSubTab !== "solidcolor"}
                >
                    {data.solidcolor.map((background) => {
                        const { name, value } = background;
                        return (
                            <div
                                className={styles.background__item}
                                key={name}
                                onClick={() =>
                                    handleBackgroundSelect(background)
                                }
                            >
                                <div
                                    style={{
                                        [`--color-background`]: value,
                                    }}
                                    className={styles.colorlist__color}
                                />
                                <div className={styles.colorlist__name}>
                                    {name}
                                </div>
                            </div>
                        );
                    })}
                </section>
            </div>
            <div
                className={cn(styles.background, {
                    [styles.background__selected]: isVideoSelected,
                })}
            >
                <button
                    className={styles.background__trigger}
                    onClick={() => handleSubtabSelect("videos")}
                >
                    Videos
                    <span>
                        {isVideoSelected ? (
                            <span className="material-symbols-outlined">
                                expand_more
                            </span>
                        ) : (
                            <span className="material-symbols-outlined">
                                expand_less
                            </span>
                        )}
                    </span>
                </button>
                <section hidden={selectedSubTab !== "videos"}>
                    videos grid goes here
                </section>
            </div>
        </section>
    );
}
