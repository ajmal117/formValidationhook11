import React, { useState } from "react";
import { useForm } from "react-hook-form";

function FormHook(props) {
  const [userinfo, setUserInfo] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setUserInfo(data);
  };

  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-4 border-2 border-fuchsia-400 rounded-lg flex flex-col justify-between h-[460px] w-[320px]">
        <p className="text-xl font-bold">Form Validation</p>
        <div className="flex flex-col">
          <label htmlFor="" className="text-lg font-medium ">
            Username
          </label>
          <input
            type="text"
            ref={register({ required: "username is required" })}
            name="username"
            placeholder="username"
            className="bg-gray-300 p-1 text-medium font-medium text-violet-800 rounded-md outline-none px-3"
          />
          {/* <p className="text-red-700">{formErrors.username}</p> */}
        </div>

        <div className="flex flex-col">
          <label htmlFor="" className="text-lg font-medium">
            Email
          </label>
          <input
            type="text"
            name="email"
            ref={register({ required: "email is required" })}
            placeholder="email"
            className="bg-gray-300 p-1 text-medium font-medium text-violet-800 rounded-md outline-none px-3"
          />
          {/* <p className="text-red-700">{formErrors.email}</p> */}
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-lg font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            ref={register({ required: "password is required" })}
            placeholder="password"
            className="bg-gray-300 p-1 text-medium font-medium text-violet-800 rounded-md outline-none px-3"
          />
          {/* <p className="text-red-700">{formErrors.password}</p> */}
        </div>

        <button
          type="submit"
          className="bg-green-500 rounded-lg p-1 text-lg font-semibold hover:bg-green-600">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormHook;
