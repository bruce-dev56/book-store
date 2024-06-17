import React from "react";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal  backdrop-blur-sm">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          {/* Email  */}
          <div className="mt-4 space-y-2">
            <span>Email</span> <br />
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className="w-80 px-3 py-1 rounded-md outline-none dark:bg-slate-900 dark:text-white border dark:border-slate-800"
            />
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
            />
          </div>
          {/* Button */}
          <div className="flex justify-around items-center mt-8">
            <button className="btn  border-green-700 text-green-500 dark:bg-transparent hover:text-white hover:bg-green-600 duration-700 ">
              Login
            </button>
            <p>
              Not registered? <span className="underline text-blue-500 cursor-pointer">Signup</span>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
