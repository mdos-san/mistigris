import { useContext } from "react";
import { MistiBoardCoreContext } from "../MistiBoardCoreContext";

function WelcomePage() {
  const { auth } = useContext(MistiBoardCoreContext);

  return (
    <>
      <h1>MistiBoard</h1>
      <button onClick={auth.initiateAuth}>Se connecter</button>
    </>
  );
}

export default WelcomePage;
