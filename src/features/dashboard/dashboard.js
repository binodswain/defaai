import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import styles from "./dashboard.module.scss";
import {
    closeMetadataOverlay,
    getDashboardModule,
    openMetadataOverlay,
    resetData,
    saveCurrentVideo,
    selectAlignment,
    selectBackground,
    selectBackgroundSubTab,
    selectTab,
    selectUser,
    updateMetaData,
} from "./dashboardSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/button/Button";

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

export function PageContent() {
    const dashboardModule = useSelector(getDashboardModule);
    const { isLoading, selectedUser, selectedTab, metadataOverlay } =
        dashboardModule;
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
                                    className={clsName}
                                    role="tab"
                                    aria-selected={isSelected}
                                    aria-controls={`panel-${idx}`}
                                    id={`${tab.toLowerCase()}_selection`}
                                    tabindex={isSelected ? 0 : -1}
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
                        tabindex="0"
                        aria-labelledby="actor_selection"
                    >
                        {selectedTab === "Actor" && <ActorTabContent />}
                    </div>
                    <div
                        id="panel-2"
                        role="tabpanel"
                        tabindex="0"
                        aria-labelledby="voice_selection"
                        // hidden
                    >
                        {selectedTab === "Voice" && <VoiceTabContent />}
                    </div>
                    <div
                        id="panel-3"
                        role="tabpanel"
                        tabindex="0"
                        aria-labelledby="alignment_selection"
                        // hidden
                    >
                        {selectedTab === "Alignment" && <AlignmentTabContent />}
                    </div>
                    <div
                        id="panel-4"
                        role="tabpanel"
                        tabindex="0"
                        aria-labelledby="background_selection"
                        // hidden
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
function ActorPreview() {
    const dashboardModule = useSelector(getDashboardModule);
    const { isLoading, actor, selectedTab } = dashboardModule;
    if (!actor.selected) {
        return "select an actor";
    }
    const { picture } = actor.selected;

    return (
        <section className={styles.content__preview__wrapper}>
            <img
                src={picture.large}
                alt=""
                className={styles.content__preview__image}
            />
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

function ActorTabContent() {
    const dashboardModule = useSelector(getDashboardModule);
    const { isLoading, actor, selectedTab } = dashboardModule;
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

function VoiceTabContent() {
    const dashboardModule = useSelector(getDashboardModule);
    const { isLoading, voice } = dashboardModule;
    const dispatch = useDispatch();

    const handleVoiceSelect = (user) => {};

    return (
        <section className={styles.voicelist}>
            {voice.data &&
                voice.data.map((voice) => {
                    return (
                        <div className={styles.voice__wrapper} key={voice}>
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

function AlignmentTabContent() {
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

function BackgroundTabContent() {
    const dashboardModule = useSelector(getDashboardModule);
    const {
        isLoading,
        background: { data, selected: selectedBackground, selectedSubTab },
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

export function SavedVideoList(params) {
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

function MetadataOverlay() {
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
