import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

const Loginpage = () => {
  
    const usercontext = useContext(UserContext);


  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:3001/user")
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
            // console.log(resp);
            usercontext.setData(resp);
             const matchedUser = resp.find(
                (user) =>
                user.id === username && user.password === password
            );
          if (matchedUser) {
                sessionStorage.setItem("name", matchedUser.id);
                alert("Logging in Successfully");
                navigate("/home");
          } else {
            alert("Please enter a valid username and password.");
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
      //     // console.log(resp);
      //     // alert("logging Successfully");
      //     // navigate('/home')
    }
  };
  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
        <form onSubmit={handleSubmit} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body" style={{ textAlign: "left" }}>
              <div className="form-group">
                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input
                  value={username}
                  onChange={(e) => usernameupdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => passwordupdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>{" "}
              |
              <Link className="btn btn-success" to={"/register"}>
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
