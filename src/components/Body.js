import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import Browse from "./Browse"
import Login from "./Login"
import Signin from "./Signin"
import Signup from "./Signup"
import { useEffect } from "react"
import { auth } from "utils/firebase"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "utils/userSlice"

const Body = () => {
  const dispatch = useDispatch()

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
          // user already contains uid/email/displayName
          const { uid, email, displayName } = user;
          dispatch(addUser({ uid, email, displayName }));
        } else {
          dispatch(removeUser());
        }
      });
    }, []);
    return <RouterProvider router={appRouter} />
}

export default Body