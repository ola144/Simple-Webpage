import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Task1 from "./components/Task1/Task1";
import Task2 from "./components/Task2/Task2";
import Navbar from "./components/Navbar/Navbar";
import Task3 from "./components/Task3/component/Task3";
import Task4 from "./components/Task4/Task4";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Task1 />} />
            <Route path="/task2" element={<Task2 />} />
            <Route path="/task3" element={<Task3 />} />
            <Route path="/task4" element={<Task4 />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
