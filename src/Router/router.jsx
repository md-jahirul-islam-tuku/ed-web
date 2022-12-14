import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/CourseDetails";
import Courses from "../components/Courses";
import Login from "../components/Login";
import Checkout from "../components/Checkout";
import Register from "../components/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../components/ErrorPage";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Courses></Courses>,
        loader: () => fetch('https://ed-web-server.vercel.app/courses')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        loader: () => fetch('https://ed-web-server.vercel.app/courses')
      },
      {
        path: '/course/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`https://ed-web-server.vercel.app/courses/${params.id}`)
      },
      {
        path: '/premium-access/:id',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({ params }) => fetch(`https://ed-web-server.vercel.app/courses/${params.id}`)
      },
    ]
  }
])

export default router;