import React from "react";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";


const SocialLogIn = () => {

  const navigate = useNavigate();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

  const handleSignInWithGoogle=()=>{
    signInWithGoogle();
  }
  const handleSignInWithGithub=()=>{
    signInWithGithub();
  }

  if(user){
    navigate('/')
  }

  return (
    <>
      <div className="text-center mt-2 d-flex flex-column justify-content-center">
        <button onClick={handleSignInWithGoogle} className="btn btn-dark rounded-pill p-2 my-2">
          Sign in with Google <FcGoogle className="fs-4 ms-3" />{" "}
        </button>
        <button onClick={handleSignInWithGithub} className="btn btn-dark rounded-pill p-2 my-2">
          Sign in with Github <BsGithub className="fs-4 ms-3" />{" "}
        </button>
      </div>
    </>
  );
};

export default SocialLogIn;
