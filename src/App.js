import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import VideoContainer from "./components/VideoContainer";
import Watch from "./components/Watch";
import CategoryVideos from "./components/CategoryVideos";

const appRouter = createBrowserRouter([{
  path:"/",
  element: <Body/>,
  children: [
    {
      path:"/",
      element:<MainPage/>
    },
    {
      path:"watch",
      element:<Watch/>
    },
    {
      path:"category",
      element:<CategoryVideos/>
    }
  ]
}]);
function App() {
  return (
    <Provider store={store}>
    <div>
      <Head />
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
