import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./App.css";

// Components
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
