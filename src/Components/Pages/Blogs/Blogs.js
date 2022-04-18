import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <div className='row g-5'>
                <div className='col-12 col-md-5'>
                    <img className='img-fluid rounded-3' src="https://i.ibb.co/yptZMv7/Untitled-design-9.png" alt="" />
                </div>
                <div className='col-12 col-md-7'>
                    <h1 className='text-center'>Difference between authorization and authentication</h1>
                    <p className='text-justify'>Authentication telling the system who you are by providing username and passwords. And authentication telling the system what can you do according to who you are. Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to</p>
                </div>
                
                <div className='col-12 col-md-7'>
                    <h1 className='text-center'>Why Firbase</h1>
                    <p className='text-justify'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                </div>
                <div className='col-12 col-md-5'>
                    <img className='img-fluid rounded-3' src="https://i.ibb.co/HzGXhqK/Untitled-design-8.png" alt="" />
                </div>

                <div className='col-12 col-md-5'>
                    <img className='img-fluid rounded-3' src="https://i.ibb.co/XSvCxRc/Game-On.png" alt="" />
                </div>
                <div className='col-12 col-md-7'>
                    <h1 className='text-center'>Firebase services </h1>
                    <p className='text-justify'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;