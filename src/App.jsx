import { Routes, Route } from "@solidjs/router";
import LandingPage from "./pages/landingPage";
import Home from "./pages/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div class="h-full">
      <Routes>
        <Route path="/" component={LandingPage}>
          <Route path="/" component={Login} />
          <Route path="/register" component={SignUp} />
        </Route>
        <Route path="/home" component={Home} />
      </Routes>
    </div>
  );
}

export default App;
