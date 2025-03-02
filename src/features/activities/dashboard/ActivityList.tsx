import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
    activities: Activity[],
    handleViewActivity: (activity: Activity) => void,
    deleteActivity: (id: string) => void,
}

function ActivityList({ activities, handleViewActivity, deleteActivity }: Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {activities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} handleViewActivity={handleViewActivity} deleteActivity={deleteActivity} />
            ))}
        </Box>
    );
}

export default ActivityList;