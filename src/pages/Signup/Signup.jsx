import React, { useContext } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { AuthContext } from "../../providers/AuthProvider";

const Signup = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const handlesignUpSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // setUser(user);
        console.log(user);
        // alert("user registration succesfull");
        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card md:w-1/2 shrink-0 max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handlesignUpSubmit} className="card-body ">
              <h3 className="text-center text-3xl font-bold text-[#FF3811]">
                Sign Up
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
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
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="SIGN UP"
                  className="btn btn-primary"
                ></input>
              </div>
              <div>
                <p>
                  Already have an account ? <Link to="/login">Login </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="text-center lg:text-left md:w-1/2 w-full p-4 md:p-10">
            <img
              src={loginImage}
              className="p-4 mr-5 md:mr-24"
              alt="login image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
