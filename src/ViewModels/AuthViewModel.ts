import Models from "../Models";

export interface AuthViewModel {
  SignIn: () => Promise<void>;
}

function AuthViewModelFactory(): AuthViewModel {
  return {
    SignIn: async () => Models.FirebaseService.googleAuth(),
  };
}

export default AuthViewModelFactory;
