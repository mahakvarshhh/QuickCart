import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    firstname: '',
    lastname: '',
    phone: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch('https://fakestoreapi.com/users', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email,
        username: form.username,
        password: form.password,
        name: {
          firstname: form.firstname,
          lastname: form.lastname
        },
        address: {
          city: "Delhi",
          street: "Main Road",
          number: 123,
          zipcode: "110001",
          geolocation: { lat: "0", long: "0" }
        },
        phone: form.phone
      })
    });

    const data = await response.json();
    console.log(data);
    alert("Registration successful! Please login.");
    window.location.href = '/login';
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} required />
        <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange} required />
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
