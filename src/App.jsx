import { Routes, Route } from "@solidjs/router";
import LandingPage from "./pages/landingPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Redirect from "./pages/Redirect";

function App() {
  return (
    <div class="h-full">
      <Routes>
        <Route path="/" component={LandingPage}>
          <Route path="/" component={Login} />
          <Route path="/register" component={SignUp} />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="*" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
