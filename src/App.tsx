import "./app.css";
import AsyncRepondComp from "./pages/AsyncRespond";
import InstantRespondComp from "./pages/InstantRespond";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-[80%] max-w-[540px] mx-auto p-2">
        <div className=" flex bg-teal-800 text-yellow-300 py-2">
          <ul className="flex w-[100%] justify-evenly  text-xl font-bold  ">
            <li className="">
              <Link to={"/"}>Instant</Link>
            </li>
            <li>
              <Link to={"/Async"}>Async</Link>
            </li>
          </ul>
        </div>
        <div className="flex">
          <Routes>
            <Route path="/" element={<InstantRespondComp />} />
            <Route path="/Async" element={<AsyncRepondComp />} />
          </Routes>
        </div>
        <p className="text-center bg-slate-400 py-2 text-sm">
          This program rank is showing-up 0 to 9
        </p>
      </div>
    </>
  );
}

export default App;
