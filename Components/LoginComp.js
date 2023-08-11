import React from "react";
import styles from "@/Components/styles/Login.module.css";
import Link from 'next/link'

const LoginComp = (props) => {
  const { LoginData, setLoginData, LoginSubmitHandler } = props;
  return (
    <div
      className={`row ${styles.background} d-flex justify-content-center align-items-center`}
    >
      <div
        className="col-md-5 col-10 pt-5 pb-4 border my-5 mx-auto"
        style={{
          background: "#fff",
          borderRadius: "16px",
          boxShadow: "2px 2px 12px 12px #1b4a8f",
        }}
      >
        <h4 className="text-center mb-4">Login to your account</h4>
        <div className="mx-5 mt-3">
          <label htmlFor="Email" style={{ fontWeight: "600" }} className="fs-6">
            Email
          </label>
          <br />
          <input
            type="text"
            className={`col-12 mt-1 ${styles.input}`}
            name="email"
            value={LoginData.email}
            onChange={(e) => setLoginData({...LoginData, 'email': e.target.value})}
            id="Email"
          />
        </div>
        <div className="mx-5 mt-3">
          <label
            htmlFor="Password"
            style={{ fontWeight: "600" }}
            className="fs-6"
          >
            Password
          </label>
          <br />
          <input
            type="password"
            className={`col-12 mt-1 ${styles.input}`}
            name="password"
            onChange={(e) => setLoginData({...LoginData, 'password': e.target.value})}
            value={LoginData.password}
            id="Password"
          />
        </div>
        <div className="mx-5 mt-3">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="ms-2">
            Remember Me
          </label>
        </div>
        <div className="mx-5 mt-3">
          <button
            className="btn btn-primary col-12 py-2"
            style={{ background: "#1f4d91" }}
            onClick={()=>{
              LoginSubmitHandler()
            }}
          >
            Login
          </button>
        </div>
        <div>
          <p className={`text-center mt-3 pb-0 mb-0 ${styles.alreadyMember}`}>
            New to MyApp?{" "}
            
            <Link href={'/'} legacyBehavior>
              <a href="#" style={{ color: "#1f4d91" }}>
                Sign Up
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
