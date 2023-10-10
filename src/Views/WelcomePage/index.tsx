import { useContext } from "react";
import { ViewModelContext } from "../ViewModelContext";

function WelcomePage() {
  const { auth } = useContext(ViewModelContext);

  return (
    <>
      <h1>MistiBoard</h1>
      <button onClick={auth.SignIn}>Se connecter</button>
    </>
  );
}

export default WelcomePage;
