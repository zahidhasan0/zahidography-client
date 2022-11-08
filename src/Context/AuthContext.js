import React, { createContext, useContext } from "react";

export const AuthProvider = createContext();
const AuthContext = ({ children }) => {
  const authInfo = {};
  return (
    <div>
      <AuthProvider.Provider value={authInfo}>{children}</AuthProvider.Provider>
    </div>
  );
};

export default AuthContext;
