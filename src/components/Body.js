import { useEffect, useState } from "react"
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import Signin from "./Signin"
import Signup from "./Signup"
import { useDispatch, useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "utils/firebase"
import { addUser, removeUser } from "utils/userSlice"

const Body = () => {
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const [authReady, setAuthReady] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (fbUser) => {
      if (fbUser) {
        const { uid, email, displayName } = fbUser
        dispatch(addUser({ uid, email, displayName }))
      } else {
        dispatch(removeUser())
      }
      setAuthReady(true)
    })
    return () => unsubscribe()
  }, [dispatch])

  const RequireAuth = ({ children }) => {
    if (!user?.uid) return <Navigate to="/" replace />
    return children
  }

  const RedirectIfAuth = ({ children }) => {
    if (user?.uid) return <Navigate to="/browse" replace />
    return children
  }

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RedirectIfAuth>
          <Login />
        </RedirectIfAuth>
      )
    },
    {
      path: "/browse",
      element: (
        <RequireAuth>
          <Browse />
        </RequireAuth>
      )
    },
    {
      path: "/signin",
      element: (
        <RedirectIfAuth>
          <Signin />
        </RedirectIfAuth>
      )
    },
    {
      path: "/signup",
      element: (
        <RedirectIfAuth>
          <Signup />
        </RedirectIfAuth>
      )
    }
  ])

  if (!authReady) return null

  return <RouterProvider router={appRouter} />
}

export default Body