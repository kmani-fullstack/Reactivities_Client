import { Box, Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selActivity, setSelActivity] = useState<Activity | undefined>(undefined);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then(response => setActivities(response.data))

    return () => { }

  }, [])

  const handleViewActivity = (activity: Activity) => {
    setSelActivity(activity)
  }
  const handleCancelActivity = () => {
    setSelActivity(undefined)
  }

  const handleOpenForm = (activity?: Activity) => {
    if (activity) {
      //alert('View')
      handleViewActivity(activity)
    }
    else {
      //alert('Cancel')
      handleCancelActivity()
    }

    setIsEdit(true)
  }

  const handleCloseForm = () => {
    setIsEdit(false)
    //handleCancelActivity()
  }

  const handleSubmitForm = (activity: Activity) => {
    if (activity.id)
      setActivities(activities.map(x => x.id === activity.id ? activity : x))
    else {
      const newActivity = { ...activity, id: activities.length.toString() }
      setSelActivity(newActivity);
      setActivities(prev => [...prev, newActivity])
    }
    setIsEdit(false)
  }

  const handleDelete = (id: string) => {
    setActivities(prev => prev.filter(x => x.id !== id))
  }

  return (
    <Box sx={{ bgcolor: '#eeeeee' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard activities={activities}
          selActivity={selActivity}
          handleViewActivity={handleViewActivity}
          handleCancelActivity={handleCancelActivity}
          isEdit={isEdit}
          openForm={handleOpenForm}
          closeForm={handleCloseForm}
          submitForm={handleSubmitForm}
          deleteActivity={handleDelete}
        />
      </Container>

    </Box>
  );
}

export default App;