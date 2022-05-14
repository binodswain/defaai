import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import styles from "./dashboard.module.scss";
import { getDashboardModule } from "./dashboardSlice";

export function SavedVideosHeader() {
    let navigate = useNavigate();
    const handleCreateNew = () => {
        navigate("/dashboard");
    };
    return (
        <header className={styles.header}>
            <div className={styles.header__left}>
                <h1>Saved Videos</h1>
            </div>
            <div className={styles.header__right}>
                <Button isPrimary onClick={handleCreateNew}>
                    Create New
                </Button>
            </div>
        </header>
    );
}

export function SavedVideoList() {
    const dashboardModule = useSelector(getDashboardModule);
    const { isLoading, savedVideos } = dashboardModule;
    return (
        <div className={styles.savedvideolist}>
            {savedVideos.map((video) => {
                const {
                    actor,
                    metadata: { title, tags, description },
                    background,
                } = video;
                return (
                    <div className={styles.savedvideo} key={video.id}>
                        <img
                            className={styles.savedvideo__image}
                            src={actor.picture.large}
                            alt=""
                        />

                        <div className={styles.savedvideo__name}>{title}</div>
                        <div className={styles.savedvideo__tags}>
                            {tags.map((tag) => {
                                return (
                                    <div
                                        className={styles.savedvideo__tag}
                                        key={tag}
                                    >
                                        {tag}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
