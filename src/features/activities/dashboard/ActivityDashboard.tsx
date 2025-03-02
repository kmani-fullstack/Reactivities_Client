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
    closeForm: () => void,
    deleteActivity: (id: string) => void,
    submitForm: (activity: Activity) => void,
}

function ActivityDashboard({ activities, selActivity, handleViewActivity, handleCancelActivity, isEdit, openForm, closeForm, submitForm, deleteActivity }: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList activities={activities} handleViewActivity={handleViewActivity} deleteActivity={deleteActivity} />
            </Grid2>
            <Grid2 size={5}>
                {
                    selActivity && !isEdit && <ActivityDetail activity={selActivity} handleCancelActivity={handleCancelActivity} openForm={openForm} />
                }
                {
                    isEdit && <ActivityForm closeForm={closeForm} activity={selActivity} submitForm={submitForm} />
                }
            </Grid2>
        </Grid2>
    );
}

export default ActivityDashboard;

