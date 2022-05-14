import { useDispatch, useSelector } from "react-redux";
import { getDashboardModule, selectVoice } from "./dashboardSlice";
import styles from "./dashboard.module.scss";
import cn from "classnames";

export default function VoiceTabContent() {
    const dashboardModule = useSelector(getDashboardModule);
    const {
        voice: { data, selected },
    } = dashboardModule;
    const dispatch = useDispatch();

    const handleVoiceSelect = (user) => {
        dispatch(selectVoice(user));
    };

    return (
        <section className={styles.voicelist}>
            {data &&
                data.map((voice) => {
                    const isSelected = selected === voice;
                    console.log(voice, isSelected);
                    return (
                        <div
                            className={cn(styles.voice__wrapper, {
                                [styles.voice__selected]: isSelected,
                            })}
                            key={voice}
                            role="button"
                            onClick={() => handleVoiceSelect(voice)}
                        >
                            <div>
                                <button className={styles.voice__action}>
                                    <svg role="presentation">
                                        <use xlinkHref="#player-play"></use>
                                    </svg>
                                </button>
                            </div>
                            <div className={styles.voice__animation}>
                                <div className={styles.voice__name}>
                                    {voice}
                                </div>
                                image
                            </div>
                        </div>
                    );
                })}
        </section>
    );
}
