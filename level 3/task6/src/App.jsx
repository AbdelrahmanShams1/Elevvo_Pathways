import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import Profile from "./components/profile";
import Overview from "./components/overView";
import Projects from "./components/projects";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="/" element={<Overview />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
