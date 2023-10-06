import { useNavigate } from "@solidjs/router";

// all unknown routes directs to login 
const Redirect = () => {
  const navigate = useNavigate();
  navigate("/");

  return <></>;
};

export default Redirect;
