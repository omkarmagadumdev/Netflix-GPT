import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import Browse from "./Browse"
import Login from "./Login"
import Signin from "./Signin"
import Signup from "./Signup"
import { useEffect } from "react"
import { auth } from "utils/firebase"

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/signin",
            element: <Signin />
        },
        {
            path: "/signup",
            element: <Signup />
        }
    ])

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName} = user.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }, []);
    return <RouterProvider router={appRouter} />
}

export default Body