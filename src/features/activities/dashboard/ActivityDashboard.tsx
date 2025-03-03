import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
    activities: Activity[],
    selActivity: Activity | undefined,
    handleViewActivity: (activity: Activity) => void,
    handleCancelActivity: () => void,

    isEdit?: boolean,
    openForm: (activity: Activity) => void,
    closeForm: () => void
}

function ActivityDashboard({ activities, selActivity, handleViewActivity, handleCancelActivity, isEdit, openForm, closeForm }: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList activities={activities} handleViewActivity={handleViewActivity} />
            </Grid2>
            <Grid2 size={5}>
                {
                    selActivity && !isEdit && <ActivityDetail selActivity={selActivity} handleCancelActivity={handleCancelActivity} openForm={openForm} />
                }
                {
                    isEdit && <ActivityForm closeForm={closeForm} activity={selActivity} />
                }
            </Grid2>
        </Grid2>
    );
}

export default ActivityDashboard;

