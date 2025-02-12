import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Games from "./Games";
import Services from "./Services";

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Home/>
    },
    {
      path : "/about",
      element : <About/>
    },
    {
      path: "/games",
      element : <Games/>
    },
    {
      path : "/services",
      element : <Services/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
