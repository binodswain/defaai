import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import { closeMetadataOverlay, getDashboardModule } from "./dashboardSlice";
import styles from "./dashboard.module.scss";

export default function MetadataOverlay() {
    const dashboardModule = useSelector(getDashboardModule);
    const { metadata } = dashboardModule;

    const dispatch = useDispatch();
    const [title, setTitle] = useState(metadata.title);
    const [description, setDescription] = useState(metadata.description);
    const [tags, setTags] = useState(metadata.tags);

    const handleSave = () => {
        dispatch(closeMetadataOverlay({ title, description, tags }));
    };
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    return (
        <section className={styles.metadata__overlay}>
            <div className={styles.metadata__wrapper}>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={styles.metadata__title}
                />
                <textarea
                    name="description"
                    id="description"
                    rows="2"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={styles.metadata__description}
                ></textarea>
                <div></div>
                <Button isPrimary onClick={handleSave}>
                    Save
                </Button>
            </div>
        </section>
    );
}
