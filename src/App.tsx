import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./Views/WelcomePage";
import AdminDashboard from "./Views/AdminDashboard";
import FamilyDashboardPage from "./Views/FamilyDashboard";
import ForbiddenPage from "./Views/ForbidenPage";

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
