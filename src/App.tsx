import AdminDashboard from "./AdminDashboard";
import FamilyDashboardPage from "./view/family-dashboard";
import ForbiddenPage from "./view/forbidden";
import WelcomePage from "./WelcomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
