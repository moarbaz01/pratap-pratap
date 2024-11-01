import { Route, Routes } from "react-router-dom";
import "./App.css";
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
