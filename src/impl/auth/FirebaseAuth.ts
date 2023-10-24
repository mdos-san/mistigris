import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseProvider } from "../../firebase";
import { MistiBoardAuth } from "../../core/auth";

export function FirebaseAuthFactory(fp: FirebaseProvider): MistiBoardAuth {
  const provider = new GoogleAuthProvider();

  return {
    initiateAuth() {
      signInWithPopup(fp.auth, provider)
        .then(async (result) => {
          const { claims } = await result.user.getIdTokenResult();
          console.log("CLAIMS", claims);
          if (claims.isAdmin) {
            window.location.href = "/admin";
          } else {
            window.location.href = "/forbidden";
          }
        })
        .catch((error) => {
          console.log({ error });
        });
    },
  };
}
