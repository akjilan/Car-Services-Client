import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import CartsCard from "./CartsCard";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Carts = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [bookingsData, setBookingsData] = useState([]);
  useEffect(() => {
    const fetchBookings = async () => {
      if (user?.email) {
        try {
          const response = await fetch(
            `http://localhost:5005/bookings?email=${user.email}`,
            {
              headers: {
                authorization: `bearer ${localStorage.getItem(
                  "car-access-token"
                )}`,
              },
            }
          );
          const data = await response.json();
          if (!data.error) {
            setBookingsData(data);
          } else {
            Swal.fire("Expired. Login again please.");
            navigate("/");
          }
          console.log(data);
        } catch (error) {
          console.error("Error sending user data to the backend", error);
        }
      }
    };

    fetchBookings();
  }, [user?.email]);

  return (
    <>
      <h3 className="text-gray-900 font-bold my-5 pb-8 text-center text-3xl tracking-wide uppercase">
        Your Order List{" "}
      </h3>
      <div className="flex flex-col ">
        {bookingsData.map((booking) => (
          <CartsCard
            key={booking._id}
            bookingsData={bookingsData}
            setBookingsData={setBookingsData}
            booking={booking}
          ></CartsCard>
        ))}
      </div>
    </>
  );
};

export default Carts;
