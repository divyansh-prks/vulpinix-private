// import { createRoot } from 'react-dom/client';

// import './index.css'
// import App from './App.jsx'
// import { ClerkProvider } from "@clerk/clerk-react";
// import { BrowserRouter } from "react-router-dom";


// const clerkFrontendApi =  import.meta.env.clerkFrontendApi;

// ;
//  createRoot(document.getElementById('root')).render(

// <ClerkProvider frontendApi={clerkFrontendApi}>

// <BrowserRouter>
//     <App />
//   </BrowserRouter>
//    </ClerkProvider>
//  )


import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

console.log(clerkFrontendApi , "mein hi hu ")

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkFrontendApi}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);
