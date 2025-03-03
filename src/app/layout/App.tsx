import { Box, Container, CssBaseline, Typography } from "@mui/material";
import { useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {

  const [selActivity, setSelActivity] = useState<Activity | undefined>(undefined);
  const [isEdit, setIsEdit] = useState(false);

  const { activities, isPending } = useActivities();


  const handleViewActivity = (activity: Activity) => {
    handleCloseForm();
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




  return (
    <Box sx={{ bgcolor: '#eeeeee', minHeight: '100vh' }}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {
          (!activities || isPending)
            ? (<Typography>Loading....</Typography>)
            : <ActivityDashboard activities={activities}
              selActivity={selActivity}
              handleViewActivity={handleViewActivity}
              handleCancelActivity={handleCancelActivity}
              isEdit={isEdit}
              openForm={handleOpenForm}
              closeForm={handleCloseForm}
            />
        }

      </Container>

    </Box>
  );
}

export default App;