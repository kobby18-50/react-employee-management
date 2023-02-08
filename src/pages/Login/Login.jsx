import Logo from "../../photos/logo.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(name, password);

    if (name === "Admin" && password === "admin") {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      navigate("/admin/dashboard/employee");
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "error",
        title: "Signed in failed",
      });
    }
  };
  return (
    <main>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 sm:mx-5">
        <div className="">
          <figure className="sm:hidden lg:flex lg:h-full">
            <img src={Logo} alt="homepage" />
          </figure>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:flex lg:flex-col sm:justify-center lg:items-center"
        >
          <h1 className="my-10">Admin Login</h1>

          <div className="grid grid-rows-2 gap-4">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              placeholder="Username"
              required
              className="input input-bordered sm:w-[300px] lg:w-[300px] max-w-xs"
            />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
              className="input input-bordered sm:w-[300px] lg:w-[300px] max-w-xs"
            />

            <button type="submit" className="btn btn-accent my-10 sm:w-[300px]">
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
