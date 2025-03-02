import { Box, Button, Card, CardActions, CardContent, CardHeader, Chip, Typography } from "@mui/material";

type Props = {
    activity: Activity,
    handleViewActivity: (activity: Activity) => void,
    deleteActivity: (id: string) => void,
}

function ActivityCard({ activity, handleViewActivity, deleteActivity }: Props) {
    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardHeader>
                {activity.title}
            </CardHeader>
            <CardContent>
                <Typography variant="h5">{activity.title}</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1 }}>{activity.date}</Typography>
                <Typography variant="body2">{activity.description}</Typography>
                <Typography variant="subtitle1">{activity.city} / {activity.venue}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between', pb: 2 }}>
                <Chip label={activity.category} variant="outlined" />
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button size="medium" variant="contained" onClick={() => handleViewActivity(activity)} >View</Button>
                    <Button size="medium" color="error" variant="contained" onClick={() => deleteActivity(activity.id)} >Delete</Button>
                </Box>

            </CardActions>
        </Card>
    );
}

export default ActivityCard;