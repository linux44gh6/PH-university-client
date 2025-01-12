import OfferedCourse from "../pages/faculty/offeredCourse";
import StudentDashboard from "../pages/student/studentDashboard";


export const studentPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <StudentDashboard />,
  },
  {
    name: 'Offered Course',
    path: 'offered-course',
    element: <OfferedCourse />,
  },
];