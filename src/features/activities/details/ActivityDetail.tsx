import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

type Props = {
    activity: Activity,
    handleCancelActivity: () => void,

    openForm: (activity: Activity) => void,
}

function ActivityDetail({ activity, handleCancelActivity, openForm }: Props) {
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