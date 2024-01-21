import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Checkout = () => {
  const service = useLoaderData();
  const { img, price, _id ,title } = service;
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleCheckoutSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const Fname = form.Fname.value;
    const Lname = form.Lname.value;
    const name = Fname + " " + Lname;
    const date = form.date.value;
    const phone = form.phone.value;
    const email = user?.email;
    const oder = {
      customerName: name,
      email: user?.email,
      service:title,
      service_id: _id,
      price,
      img,
      date,
      phone
    };
    // console.log(oder);
    fetch(`http://localhost:5005/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(oder),
    })
      .then((res) => res.json())
      .then((data) => Swal.fire("Order has been placed !"));

    form.reset();
  };
  return (
    <>
      <h4 className="my-4 font-bold text-3xl tracking-wide text-center text-gray-800">
        {service.title}
      </h4>
      <section>
        <div className="w-full bg-base-200">
          <div className=" w-full px-8 md:px-20 ">
            <div className="card  shadow-2xl bg-base-100">
              <form
                onSubmit={handleCheckoutSubmit}
                className="card-body flex flex-col"
              >
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-7">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      type="text"
                      name="Fname"
                      defaultValue={user?.displayName}
                      placeholder="Your First name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input
                      type="text"
                      name="Lname"
                      placeholder="Your last name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      placeholder="email"
                      className="input input-bordered"
                      required
                      readOnly
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Your phone number"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Date</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      placeholder="Delivery date"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Due Amount</span>
                    </label>
                    <input
                      type="text"
                      name="price"
                      defaultValue={"$" + service?.price}
                      className="input input-bordered font-bold text-gray-900"
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-control mt-6 w-full">
                  <label className="label">
                    <span className="label-text">Your Message</span>
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    placeholder="Your message"
                    className="input input-bordered"
                    cols="40"
                    rows="10"
                  />
                </div>
                <div className="form-control mt-6 w-full">
                  <input
                    type="submit"
                    value="order"
                    className="btn btn-primary btn-block"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
