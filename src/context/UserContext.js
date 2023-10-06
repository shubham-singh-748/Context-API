// this import react library, which is required to work with react components or features.
import React from "react";

// "userContext" creates a new React context using "React.createContext()". 
// A react context is used for sharing data without passing data through props.
// It allows you to share data at global level.
const userContext = React.createContext();

export default userContext;
