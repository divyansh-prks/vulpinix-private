import React from "react";
import { useUser } from "@clerk/clerk-react";
import { Link ,  useNavigate } from "react-router-dom";

 const Hero = () => {

  const {isSignedIn} = useUser();
  const navigate = useNavigate()

  const handleSignIn = () => {
    if (isSignedIn) {
      navigate("/dashboard")
    }else {
      navigate("sign-in")
    }
  }

  const handleSignup = () => {
    if(isSignedIn){
      navigate("/dashboard")
    }else{
      navigate('/signup')
    }
  }



  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="https://res.cloudinary.com/dgmsi5ncg/video/upload/v1743000658/vulp_q5m0oy.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-50"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-5 text-white  bg-opacity-60">
        <div className="text-2xl font-bold">
            <img className="h-20" src="../src/assets/logo.png" alt="" />
        </div>
        <div className="space-x-6">
      <Link to="/" className="hover:text-gray-300 text-2xl font-[Poppins]">Home</Link>
      <Link to="/contact" className="hover:text-gray-300 text-2xl font-[Poppins]">Contact</Link>
      <Link to="/campaign" className="hover:text-gray-300 text-2xl font-[Poppins]">Campaign</Link>
      <Link to="/about-us" className="hover:text-gray-300 text-2xl font-[Poppins]">About Us</Link>
      
      <button 
        className="hover:text-gray-300 text-2xl font-[Poppins] cursor-pointer"
        onClick={handleSignup}
      >
        Sign up
      </button>
    </div>
      </nav>

      {/* Hero Section */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
        <h1 className="text-9xl font-bold mb-4">AI Marketing</h1>
        <button className="px-6 py-2 ml-2 bg-blue-400 border-4  border-bllue-700 hover:bg-blue-600 text-white rounded-lg text-4xl">Get Started</button>
      </div>

      {/* Image on the Right */}
      <div className="absolute top-1/2 right-20 transform -translate-y-1/2">
        <img src="../src/assets/robot.png"  alt="AI Marketing" className="mt-60 w-160 h-200 rounded-lg" />
      </div>

      <div>
        <img src="../src/assets/robot.png" alt="" />
      </div>
    </div>
    
  );
};

export default Hero ;