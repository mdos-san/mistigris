import { firebaseService } from "../firebase";

function SignIn() {
  return <div>
    <button onClick={() => firebaseService.googleAuth()}>Se connecter</button>
  </div>
}

export default SignIn;
