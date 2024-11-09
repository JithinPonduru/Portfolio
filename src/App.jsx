import "./App.css";
import LandingPage from "./Components/LandingPage";
import ProjectsPages from "./Components/ProjectsPages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path : "/Project1",
      element :  <ProjectsPages index={0} /> ,
      errorElement : <h1>404 Not Found</h1>
    },
    {
      path : "/Project2",
      element :  <ProjectsPages index = {1} /> ,
      errorElement : <h1>404 Not Found</h1>
    },
    {
      path : "/Project3",
      element :  <ProjectsPages index = {2} /> ,
      errorElement : <h1>404 Not Found</h1>
    },
    {
      path : "/Project4",
      element :  <ProjectsPages index = {3} /> ,
      errorElement : <h1>404 Not Found</h1>
    }
  ]);
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
