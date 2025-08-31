import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import AddJob from "./components/addJob";
import DetailsJob from "./components/detailsJob";
import Dashboard from "./components/dashboard";
import MainPage from "./pages/mainPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainPage />}>
          <Route path="/addJob" element={<AddJob />} />
          <Route path="/details/:id" element={<DetailsJob />} />
          <Route path="/" element={<Dashboard />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
