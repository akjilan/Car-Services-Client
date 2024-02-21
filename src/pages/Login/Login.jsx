import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
const Login = () => {
  const { signInUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        const loggedInUserEmail = {
          user: user.email,
        };
        axios.post(`http://localhost:5005/accesstoken`, loggedInUserEmail,{withCredentials:true})
          // .then((res) => res.json())
          .then((data) => {
            // console.log(data.token);
            //saving the token in the local storage:
            // localStorage.setItem("car-access-token", data.token);
            console.log(data.data.token)
            navigate(from, { replace: true });
            Swal.fire("Logged in sucessfully!!!!!!");
          });

        form.reset();
      })
      .catch((error) => setError(error));
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card md:w-1/2 shrink-0 max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleLoginSubmit} className="card-body ">
              <h3 className="text-center text-3xl font-bold text-[#FF3811]">
                Login
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                {error ? (
                  <small>Please give valid email and password</small>
                ) : (
                  <small></small>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary uppercase tracking-wider"
                ></input>
              </div>
              <div>
                <p>
                  Haven't any accout yet ?{" "}
                  <Link
                    to="/login/signup"
                    className="font-bold  uppercase text-sm tracking-wide"
                  >
                    {" "}
                    Sign Up{" "}
                  </Link>
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

export default Login;
