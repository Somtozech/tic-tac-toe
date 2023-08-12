import {getAuth, signInAnonymously, updateProfile} from "firebase/auth";

// import {useEffect, useState} from "react";

const useAuth = () => {
  const signIn = async (displayName: string) => {
    const auth = getAuth();
    try {
      await signInAnonymously(auth);

      if (auth.currentUser) {
        await updateProfile(auth.currentUser, {displayName});
      }
    } catch (error) {
      alert(`Error signing in: ${error}`);
    }
  };

  const getUser = () => {
    const auth = getAuth();

    return {
      user: auth.currentUser,
    };
  };

  return {getUser, signIn};
};

export default useAuth;
