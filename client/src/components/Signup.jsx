import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = () => {
  // react-hook-form Validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // to hold user info in data Parameter

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    // console.log(data);

    // Data sent to the database
    await axios
      .post("http://localhost:4001/user/signup", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          alert("Signup Successful");
        }
        // Signup data stored in the Browser local Storage
        localStorage.setItem("users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          alert("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div className="w-[600px] flex justify-center items-center">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              {/* Name  */}
              <div className="mt-4 space-y-2">
                <span>Name</span> <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 rounded-md outline-none dark:bg-slate-900 dark:text-white border dark:border-slate-800"
                  {...register("fullname", { required: true })} //Validation
                />
                {errors.fullname && (
                  <span className="text-red-600 block">
                    This field is required
                  </span>
                )}{" "}
                {/*  for the input field error */}
              </div>
              {/* Email  */}
              <div className="mt-4 space-y-2">
                <span>Email</span> <br />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 rounded-md outline-none dark:bg-slate-900 dark:text-white border dark:border-slate-800"
                  {...register("email", { required: true })} //Validation
                />
                {errors.email && (
                  <span className="text-red-600 block">
                    This field is required
                  </span>
                )}{" "}
                {/*  for the input field error */}
              </div>
              {/* password */}
              <div className="mt-4 space-y-2">
                <span>Password</span> <br />
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white dark:border-slate-800"
                  {...register("password", { required: true })} //Validation
                />
                {errors.password && (
                  <span className="text-red-600 block">
                    This field is required
                  </span>
                )}{" "}
                {/*  for the input field error */}
              </div>
              {/* Button */}
              <div className="flex justify-around items-center mt-8">
                <button className="btn  border-green-700 text-green-500 dark:bg-transparent hover:text-white hover:bg-green-600 duration-700 ">
                  Signup
                </button>
                <p>
                  Have account?
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
