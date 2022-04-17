import React from "react";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';


const SocialLogIn = () => {
  return (
    <>
      <div className="text-center mt-2 d-flex flex-column justify-content-center">
        <button className="btn btn-dark rounded-pill p-2 my-2">
          Sign in with Google <FcGoogle className="fs-4 ms-3" />{" "}
        </button>
        <button className="btn btn-dark rounded-pill p-2 my-2">
          Sign in with Github <BsGithub className="fs-4 ms-3" />{" "}
        </button>
      </div>
    </>
  );
};

export default SocialLogIn;
