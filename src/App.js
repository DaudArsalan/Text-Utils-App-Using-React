import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <Router basename="/Text-Utils-App-Using-React">
      <div
        id="root"
        className="dark:bg-gray-800 dark:text-gray-300 transition-all"
      >
        <Navbar title="TextUtils" />

        <div className="py-16 px-8 sm:px-20 md:px-28 lg:px-40">
          <Routes>
            <Route
              exact
              path="/Text-Utils-App-Using-React"
              element={<TextForm />}
            />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
