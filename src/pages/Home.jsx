import { useLocation } from "@solidjs/router";
import Sidebar from "../components/Sidebar";
import DefaultLayout from "../layout/DefaultLayout";

const Home = () => {
  const location = useLocation();
  const { username } = location.state;
  return (
    <div>
      <DefaultLayout username={username} />
    </div>
  );
};

export default Home;
