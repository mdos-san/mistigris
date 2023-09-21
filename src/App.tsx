import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./view/welcome";
import AdminDashboardPage from "./view/admin-dashboard";
import FamilyDashboardPage from "./view/family-dashboard";
import ForbiddenPage from "./view/forbidden";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/admin",
    element: <AdminDashboardPage />,
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
  return <>
    <RouterProvider router={router} />
  </>
}

export default App;
