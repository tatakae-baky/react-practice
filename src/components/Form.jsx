import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  // console.log(form);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form className="flex flex-col gap-y-4">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">
        Sign Up
      </h2>

      <div className="space-y-2">
        <label htmlFor="firstName">First Name : </label>
        <input
          onChange={handleChange}
          type="text"
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          className="w-full px-4 py-2 "
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="lastName">Last Name : </label>
        <input
          onChange={handleChange}
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter your last name"
          className="w-full px-4 py-2 "
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email">Email : </label>
        <input
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 "
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password">Password : </label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
          placeholder="Create a password"
          className="w-full px-4 py-2 "
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
