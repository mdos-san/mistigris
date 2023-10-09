import { firebaseService } from "../../firebase";

function WelcomePage() {
  return (
    <>
      <h1>MistiBoard</h1>
      <button onClick={() => firebaseService.googleAuth()}>Se connecter</button>
    </>
  );
}

export default WelcomePage;
