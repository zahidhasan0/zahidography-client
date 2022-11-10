import React, { useContext, useEffect } from "react";
import { AuthProvider } from "../../Context/AuthContext";

const Check = () => {
  const { user } = useContext(AuthProvider);

  useEffect(() => {
    fetch(`http://localhost:5000/reviewsByUID/${user.uid}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        email: `${user?.email}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h4>{user.uid}</h4>
      <h4>this is check</h4>
    </div>
  );
};

export default Check;
