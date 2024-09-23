import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7a68e0a4-354c-4fc9-b5f7-a4b4da4b3900");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  



  return (
    <div  className='form-main'>
      <form onSubmit={onSubmit} className='form' >
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name='fullName'
          placeholder="Full name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name='email'
          placeholder="Email"
          required
        />
        <label htmlFor="contactNum">Contact Number</label>
        <input
          type="text"
          id="contactNum"
          name='contactNum'
          placeholder="Contact Number"
          required
        />
        <label htmlFor="dateTimeCall">Suitable Time To Connect</label>
        <input
          type="datetime-local"
          id="dateTimeCall"
          name='dateTimeCall'
          className="date-time-input"
        />
        <label htmlFor="dateTimeMeet">Tentative Site Visit Plan</label>
        <input
          type="datetime-local"
          id="dateTimeMeet"
          name='dateTimeMeet'
          className="date-time-input"
        />
        <button type="submit" >
         Submit
        </button>
       
      </form>
    </div>
  );
};

export default Contact;
