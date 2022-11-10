import React, { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../Context/AuthContext";
import ReviewCard from "./ReviewCard/ReviewCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const MyReview = () => {
  const [userReviews, setUserReviews] = useState([]);
  const { user, logOut } = useContext(AuthProvider);
  console.log(user.uid);

  //load reviews by uid.

  useEffect(() => {
    fetch(`http://localhost:5000/reviewsByUID/${user.uid}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        email: `${user?.email}`,
      },
    })
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("token")}`,
      //   email: `${user?.email}`,
      // },
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUserReviews(data);
      });
  }, [user?.uid, user?.email, logOut]);

  // review delete function
  const handleDelete = (id) => {
    const agree = window.confirm("Aye you sure to delete this review?");
    if (!agree) {
      return;
    }

    fetch(`http://localhost:5000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Successfully Deleted");
          const remaining = userReviews.filter((review) => review._id !== id);
          setUserReviews(remaining);
        } else {
          return;
        }
      });
  };
  return (
    <div>
      {/* helmet for route title  */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Review : ZahidograhY </title>
      </Helmet>

      <h2 className="text-center font-bold text-3xl mb-6 mt-12">
        Your Reviews
      </h2>
      <div>
        {userReviews.length === 0 ? (
          <div className="w-3/5 mx-auto h-80 my-auto flex justify-center items-center">
            <h3 className="text-3xl  text-center text-yellow-500 font-bold">
              No reviews were added
            </h3>
          </div>
        ) : (
          <>
            {userReviews.map((singleReview) => (
              <ReviewCard
                key={singleReview._id}
                singleReview={singleReview}
                handleDelete={handleDelete}
              ></ReviewCard>
            ))}
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyReview;
