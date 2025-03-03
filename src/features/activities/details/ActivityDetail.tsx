import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
    selActivity: Activity,
    handleCancelActivity: () => void,

    openForm: (activity: Activity) => void,
}

function ActivityDetail({ selActivity, handleCancelActivity, openForm }: Props) {

    const { activities } = useActivities()
    const activity = activities?.find(x => x.id === selActivity.id)

    if (!activity) return <Typography>Loading....</Typography>

    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia component={'img'} src={`/images/categoryImages/${activity.category}.jpg`} />
            <CardContent>
                <Typography variant="h5">{activity.title}</Typography>
                <Typography variant="subtitle1" fontWeight={'light'}>{activity.date}</Typography>
                <Typography variant="body1">{activity.description}</Typography>
            </CardContent>
            <CardActions>
                <Button color="primary" onClick={() => openForm(activity)} >Edit</Button>
                <Button color="inherit" onClick={handleCancelActivity}>Cancel</Button>
            </CardActions>
        </Card>
    );
}

export default ActivityDetail;