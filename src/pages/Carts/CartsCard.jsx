import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartsCard = ({ booking, bookingsData, setBookingsData }) => {
  //   console.log(bookingsData);
  const { _id, img, price, service, date } = booking;
  const handleBookingDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5005/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const newBookingsData = bookingsData.filter((b) => b._id !== id);
              setBookingsData(newBookingsData);
              //alert
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  //   const handleBookingUpdate = id=>{
  //     fetch(`http://localhost:5005/bookings/${id}`,{
  //         method:"PUT",
  //         headers:{
  //             'content-type' : 'application/json'
  //         },
  //         body:JSON.stringify()
  //     })
  //   }

  return (
    <>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-6 items-center">
          <div className="flex justify-center text-center items-center mx-auto ">
            {img && (
              <img src={img} className="w-24 h-24 rounded-lg shadow-2xl" />
            )}
          </div>
          <div className="flex justify-between items-center space-x-4 md:space-x-10">
            <div className="flex items-center">
              <h1 className=" font-bold">{service}</h1>
            </div>
            <div className="flex justify-center items-center">
              {" "}
              <h4 className="font-bold">$ {price}</h4>
            </div>
            <div className="flex justify-center items-center">
              {" "}
              <h4 className="font-bold">{date}</h4>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={() => handleBookingDelete(_id)}
                className="btn btn-sm btn-warning  mr-2"
              >
                delete
              </button>
              <button className="btn btn-sm btn-warning ">
                <Link to={`/bookings/${_id}`}>Update</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartsCard;
