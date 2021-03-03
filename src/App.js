import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import EditPage from "./components/EditPage";

const App = () => {
  return (
    <Router>
      <Nav />
      <div className="container">
        <Route path="/" exact component={Dashboard} />
        <Route path="/editpage/:id" component={EditPage} />
      </div>
    </Router>
  );
};

export default App;
