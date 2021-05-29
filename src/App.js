import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Aside from "./components/Aside/Aside";
import Contact from "./Pages/Contact/Contact";
import Profile from "./Pages/Profile/Profile";
import Preloader from "./components/Preloader/Preloader";
import JobPosting from "./Pages/JobPosting/JobPosting";
import AppliedJobs from "./Pages/AppliedJobs/AppliedJobs";
import FavoriteJobs from "./Pages/FavoriteJobs/FavoriteJobs";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";

window.addEventListener("load", function () {
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
});

function App() {
  return (
    <Router>
      <Aside></Aside>
      <Preloader></Preloader>
      <Switch>
        <PrivateRoute exact path="/">
          <Home></Home>
        </PrivateRoute>
        <PrivateRoute path="/profile">
          <Profile></Profile>
        </PrivateRoute>
        <PrivateRoute path="/post-jobs">
          <JobPosting></JobPosting>
        </PrivateRoute>
        <PrivateRoute path="/applied-jobs">
          <AppliedJobs></AppliedJobs>
        </PrivateRoute>
        <PrivateRoute path="/favorite-jobs">
          <FavoriteJobs></FavoriteJobs>
        </PrivateRoute>
        <PrivateRoute path="/contact">
          <Contact></Contact>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
