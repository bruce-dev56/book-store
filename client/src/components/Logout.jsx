import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null
      });
      localStorage.removeItem("users");
      toast.success("Logout Successfully");

      setTimeout(()=>{
        window.location.reload();
      },3000)

    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(()=>{},2000)
    }
  };

  return (
    <div>
      <button
        className="btn btn-outline border-green-500 hover:text-white hover:bg-red-500 hover:border-red-500 dark:text-white "
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
