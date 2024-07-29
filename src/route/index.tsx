import { createBrowserRouter, RouteObject } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "../App";
import Loading from "../components/common/Loading";
import FormComponent from "../components/form/FormComponent";

const Login = lazy(() => import("../components/login"));
const Signup = lazy(() => import("../components/login/subComponents/Signup"));
const ForgotPassword = lazy(() => import("../components/login/subComponents/ForgotPassword"));

const appRouter: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element:<FormComponent />,
      },
    ],
    
  },

  
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<Loading />}>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <Suspense fallback={<Loading />}>
        <ForgotPassword />
      </Suspense>
    ),
  },
];

const router = createBrowserRouter(appRouter);

export default router;
