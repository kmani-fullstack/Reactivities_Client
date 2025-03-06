import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { Link, useNavigate, useParams } from "react-router";


function ActivityDetail() {
    const nav = useNavigate();
    const { id } = useParams()
    const { activity, isLoadingActivity } = useActivities(id)
    //const activity = activities?.find(x => x.id === id)

    if (isLoadingActivity) return <Typography>Loading....</Typography>

    if (!activity) return <Typography>Activity not found</Typography>

    return (
        <Card sx={{ borderRadius: 3, width: 800, height: 600 }}>
            <CardMedia component={'img'} src={`/images/categoryImages/${activity.category}.jpg`} height={400} />
            <CardContent>
                <Typography variant="h5">{activity.title}</Typography>
                <Typography variant="subtitle1" fontWeight={'light'}>{activity.date}</Typography>
                <Typography variant="body1">{activity.description}</Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to={`/activities/edit/${id}`} color="primary" onClick={() => { }} >Edit</Button>
                <Button color="inherit" onClick={() => nav('/activities')}>Cancel</Button>
            </CardActions>
        </Card>
    );
}

export default ActivityDetail;