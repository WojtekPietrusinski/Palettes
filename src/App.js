import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Home from "./components/Home"
import Form from "./components/Form"
import Upload from "./components/Upload"

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/form",
      element: <Form/>
    },
    {
      path: "/upload",
      element: <Upload/>
    },
  ]);

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
