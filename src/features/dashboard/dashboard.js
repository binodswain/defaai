import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

import {
    getDashboardModule,
    openMetadataOverlay,
    resetData,
    saveCurrentVideo,
    selectTab,
} from "./dashboardSlice";
import Button from "../../components/button/Button";
import MetadataOverlay from "./metadataOverlay";
import ActorTabContent from "./ActorTabContent";
import VoiceTabContent from "./VoiceTabContent";
import AlignmentTabContent from "./AlignmentTabContent";
import BackgroundTabContent from "./BackgroundTabContent";

import styles from "./dashboard.module.scss";

export function PageHeader() {
    const dashboardModule = useSelector(getDashboardModule);
    const { metadata } = dashboardModule;

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const handleSave = () => {
        dispatch(saveCurrentVideo());
        dispatch(resetData());
        navigate("/savedvideos");
    };

    const handleExpandOverlay = () => {
        dispatch(openMetadataOverlay());
    };
    return (
        <header className={styles.header}>
            <div className={styles.header__left}>
                <h1>{metadata.title}</h1>
                <button
                    className={styles.header__expand}
                    onClick={handleExpandOverlay}
                >
                    <span className="material-symbols-outlined">
                        expand_more
                    </span>
                </button>
            </div>
            <div className={styles.header__right}>
                <Button isSecondary>Cancel</Button>
                <Button isPrimary onClick={handleSave}>
                    Save
                </Button>
            </div>
        </header>
    );
}

function ActorPreview() {
    const dashboardModule = useSelector(getDashboardModule);
    const { actor } = dashboardModule;
    if (!actor.selected) {
        return "select an actor";
    }
    const { picture } = actor.selected;

    return (
        <section className={styles.content__preview__wrapper}>
            <div className={styles.image__wrapper}>
                <img
                    src={picture.large}
                    alt=""
                    className={styles.content__preview__image}
                />
                <div className={styles.button__wrapper}>
                    <button>Preview</button>
                </div>
            </div>
            <div className={styles.content__preview__textbox}>
                <textarea placeholder="Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages"></textarea>
                <div className={styles.content__preview__actionbar}>
                    <Button isSecondary>Listen</Button>
                    <span className={styles.content__preview__wordcount}>
                        0 char
                    </span>
                </div>
            </div>
        </section>
    );
}

export function PageContent() {
    const dashboardModule = useSelector(getDashboardModule);
    const { selectedTab, metadataOverlay } = dashboardModule;
    const dispatch = useDispatch();

    const handleTabSelect = (tab) => {
        dispatch(selectTab(tab));
    };

    const TABS = ["Actor", "Voice", "Alignment", "Background"];
    return (
        <section className={styles.content}>
            <div className={styles.content__preview}>
                <ActorPreview />
            </div>
            <div className={styles.content__configuration}>
                <div className={styles.tabs}>
                    <div
                        role="tablist"
                        className={styles.tablist}
                        aria-label="Configuration tabs"
                    >
                        {TABS.map((tab, idx) => {
                            const isSelected = tab === selectedTab;
                            const clsName = cn(styles.tab, {
                                [styles.tab__selected]: isSelected,
                            });
                            return (
                                <button
                                    key={tab}
                                    className={clsName}
                                    role="tab"
                                    aria-selected={isSelected}
                                    aria-controls={`panel-${idx}`}
                                    id={`${tab.toLowerCase()}_selection`}
                                    tabIndex={isSelected ? 0 : -1}
                                    onClick={() => handleTabSelect(tab)}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                    </div>
                    <div
                        id="panel-1"
                        role="tabpanel"
                        aria-labelledby="actor_selection"
                    >
                        {selectedTab === "Actor" && <ActorTabContent />}
                    </div>
                    <div
                        id="panel-2"
                        role="tabpanel"
                        aria-labelledby="voice_selection"
                    >
                        {selectedTab === "Voice" && <VoiceTabContent />}
                    </div>
                    <div
                        id="panel-3"
                        role="tabpanel"
                        aria-labelledby="alignment_selection"
                    >
                        {selectedTab === "Alignment" && <AlignmentTabContent />}
                    </div>
                    <div
                        id="panel-4"
                        role="tabpanel"
                        aria-labelledby="background_selection"
                    >
                        {selectedTab === "Background" && (
                            <BackgroundTabContent />
                        )}
                    </div>
                </div>
            </div>
            {metadataOverlay && <MetadataOverlay />}
        </section>
    );
}
