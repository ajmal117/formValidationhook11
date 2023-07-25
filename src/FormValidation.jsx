import React, { useEffect, useState } from "react";

function FormValidation(props) {
  const initialValue = { username: "", email: "", password: "" };

  const [formData, setFormData] = useState(initialValue);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handlleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);

  const validate = (value) => {
    const error = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!value.username) {
      error.username = "username is required !";
    }
    if (!value.email) {
      error.email = "email is required !";
    } else if (!regex.test(value.email)) {
      error.email = "enter a valid email address!";
    }
    if (!value.password) {
      error.password = "password is required !";
    } else if (value.password.length < 4) {
      error.password = "password should be more than 4 character";
    } else if (value.password.length > 10) {
      error.password = "password should be less than 10 characters";
    }
    return error;
  };

  return (
    <>
      <div>
        <div className="bg-white my-3 p-2 rounded-lg w-[320px]">
          {Object.keys(formErrors).length === 0 && isSubmit ? 
            <div className="text-green-500">Signed In Successfully</div>
           : 
            <pre className="bg-white my-3 ">
              {JSON.stringify(formData, undefined, 2)}
            </pre>
          }
        </div>

        <form
          action=""
          onSubmit={handlleSubmit}
          className="bg-white p-4 border-2 border-fuchsia-400 rounded-lg flex flex-col justify-between h-[460px] w-[320px]">
          <p className="text-xl font-bold">Form Validation</p>
          <div className="flex flex-col">
            <label htmlFor="" className="text-lg font-medium ">
              Username
            </label>
            <input
              type="text"
              name="username"
             
              onChange={handleChange}
              placeholder="username"
              className="bg-gray-300 p-1 text-medium font-medium text-violet-800 rounded-md outline-none px-3"
            />
            <p className="text-red-700">{formErrors.username}</p>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-lg font-medium">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
              className="bg-gray-300 p-1 text-medium font-medium text-violet-800 rounded-md outline-none px-3"
            />
            <p className="text-red-700">{formErrors.email}</p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-lg font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
              className="bg-gray-300 p-1 text-medium font-medium text-violet-800 rounded-md outline-none px-3"
            />
            <p className="text-red-700">{formErrors.password}</p>
          </div>

          <button
            type="submit"
            className="bg-green-500 rounded-lg p-1 text-lg font-semibold hover:bg-green-600">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default FormValidation;
