import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import Signin from "./Signin"

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/signin",
            element:<Signin />
        }
    ])
  return (
    <div>
        <RouterProvider router= {appRouter}>
        
       <Login/> 
       <Browse/>
       <Signin />

        </RouterProvider>
    </div>
  )
}

export default Body