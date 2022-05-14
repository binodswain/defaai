import { AppContentLayout } from "../../components/layout/Layout";
import {
    SavedVideoList,
    SavedVideosHeader,
} from "../../features/dashboard/savedVideo";

function SavedVideos() {
    return (
        <AppContentLayout>
            <SavedVideosHeader />
            <SavedVideoList />
        </AppContentLayout>
    );
}

export default SavedVideos;
