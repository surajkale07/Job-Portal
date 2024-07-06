import React, { useState } from "react";
import PageTitleBanner from "../../globalComponents/PageTitleBanner";
import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
const Register = () => {
  // const navigate = useNavigate();
  // const {
  //   register,
  //   formState: { errors },
  //   handleSubmit,
  // } = useForm();
  // const [userRegister, { isLoading, error, isSuccess }] =
  //   useUserRegisterMutation();
  // useEffect(() => {
  //   if (error) {
  //     toast.error("there was an error" + error?.message, { toastId: "error" });
  //   }
  //   if (!error && !isLoading && isSuccess) {
  //     navigate("/login");
  //     toast.success("You have register please login", {
  //       toastId: "success",
  //     });
  //   }
  // }, [error, isLoading, navigate, isSuccess]);

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [errorMsg,setErrorMsg] =useState("");
const onSubmit=(e) =>{
  e.preventDefault();
  // if(!email || password ){
  //   setErrorMsg("Fill all fields")
  // }
  // setErrorMsg("");

  createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential) => {
    alert("Register Successful")
    window.location.href="/login"
  })
  .catch((error) =>{
    console.log(error);
  });
};

  return (
    <>
      <PageTitleBanner title="Register" />
      <div className="flex py-8 sm:pt-16  px-2 justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl rounded-none">
          <div className="card-body">
        
            <form onSubmit={onSubmit}>
              {/*.........Name Input filed start........... */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs rounded-none"
                  // {...register("name", {
                  //   required: {
                  //     value: true,
                  //     message: "Name is Required",
                  //   },
                  // })}
                />
                {/* <label className="label p-[2px]">
                  {errors.fname?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.fname.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.fname.message}
                    </span>
                  )}
                </label> */}
              </div>
              {/*.........Name Input filed end.............*/}

              {/* .........Email Input filed start ............*/}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full max-w-xs rounded-none"
                  // {...register("email", {
                  //   required: {
                  //     value: true,
                  //     message: "Email is Required",
                  //   },
                  //   pattern: {
                  //     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  //     message: "Provide a valid Email",
                  //   },
                  // })}
                />
                {/* <label className="label p-[2px]">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label> */}
              </div>
              {/* ...........Email Input filed end .............*/}

              {/*......... Password Input filed start....... */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs rounded-none"
                  // {...register("password", {
                  //   required: {
                  //     value: true,
                  //     message: "Password is Required",
                  //   },
                  //   minLength: {
                  //     value: 6,
                  //     message: "Must be 6 characters or longer",
                  //   },
                  // })}
                />
                {/* <label className="label p-[2px]">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label> */}
              </div>
              <br/>
             
              <button
              className="btn btn-primary w-full max-w-xs text-white rounded-none hover:shadow-lg"
              type="submit"
              >Register</button>
            
            </form>
            <div className="flex justify-center">
              <small>
                Already have an account?{" "}
                <Link className="text-primary hover:underline" to="/login">
                  please login
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
