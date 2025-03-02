import { List, ListItem, ListItemText } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

function App() {

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {

    /* fetch("https://localhost:5001/api/activities")
      .then(response => response.json())
      .then(data => setActivities(data)) */

    axios
      .get<Activity[]>("https://localhost:5001/api/activities")
      .then(response => setActivities(response.data))

    return () => { }

  }, [])

  return (
    <>
      <NavBar />
      <List>
        {
          activities.length > 0 &&
          activities.map((a) =>
          (
            <ListItem key={a.id}>
              <ListItemText>{a.title}</ListItemText>
            </ListItem>
          ))
        }
      </List>
    </>
  );
}

export default App;