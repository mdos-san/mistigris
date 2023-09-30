import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./view/welcome";
import FamilyDashboardPage from "./view/family-dashboard";
import ForbiddenPage from "./view/forbidden";
import AdminDashboard from "./AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/family",
    element: <FamilyDashboardPage />,
  },
  {
    path: "/forbidden",
    element: <ForbiddenPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
