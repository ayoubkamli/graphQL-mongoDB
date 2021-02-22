import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const config = {
      url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT,
      handleCodeInApp: true,
    };
    await auth.sendSignInLinkToEmail(email, config);
    // showw toast notification to user about email sent
    toast.success(
      `Email is sent to ${email}. click the link to continue your registration`
    );

    //save user email to local storage
    window.localStorage.setItem("emailFormRegistration", email);
    // clear state
    setEmail("");
    setLoading("");
  };

  return (
    <div className="container p-5">
      {loading ? <h4 className="text-danger">Loding...</h4> : <h4>Register</h4>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter Email"
            disabled={loading}
          ></input>
        </div>
        <button
          className="btn btn-raised btn-primary"
          disabled={!email || loading}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;