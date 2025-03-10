import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timer from "./Components/Timer";
import Counter from "./Components/Counter";
import Cards from "./Components/Cards";
import CardDetails from "./Components/CardDetails";
import TodoList from "./Components/TodoList";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={darkMode ? "bg-dark text-white" : "bg-light text-dark"} style={{ minHeight: "100vh", padding: "20px" }}>
        <div className="container-fluid">
          <button className="btn btn-primary mb-3" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          <h1 className="text-center">React Test2</h1>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Timer />
                  <hr />
                  <Counter />
                  <hr />
                  <TodoList />
                  <hr />
                  <Cards />
                </>
              }
            />
            <Route path="/cart/:cartId" element={<CardDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
