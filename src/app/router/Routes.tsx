import { createBrowserRouter } from 'react-router'
import App from '../layout/App'
import HomePage from '../../features/home/HomePage'
import ActivityForm from '../../features/activities/form/ActivityForm'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import ActivityDetail from '../../features/activities/details/ActivityDetail'


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'activities/edit/:id', element: <ActivityForm key={'edit'} /> },
            { path: 'activities/:id', element: <ActivityDetail /> },
            { path: 'createActivity', element: <ActivityForm key={'create'} /> },
        ]
    }
])