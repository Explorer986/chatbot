import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";

const SignIn = ({ setUser }) => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      setUser({ uid: user.uid, name: user.displayName, email: user.email });
    } catch (error) {
      console.error("SignIn failed", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={handleGoogleSignIn}
        className="bg-gray-800 text-white px-6 py-3 rounded-lg"
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;