import { Box } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
    activities: Activity[],
    handleViewActivity: (activity: Activity) => void
}

function ActivityList({ activities, handleViewActivity }: Props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {activities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} handleViewActivity={handleViewActivity} />
            ))}
        </Box>
    );
}

export default ActivityList;