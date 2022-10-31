import React from "react";
import "../loginPage.css";
import LockIcon from "@mui/icons-material/Lock";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "../../node_modules/firebase/auth";
import { doApiMethod } from "../services/api";
import Isloggedin from "../services/isloggedin";

const LoginPage = () => {
  //initialization of useNavigate
  let navigate = useNavigate();
  const [email, setEmail] = useState("");

  //will be of use to listen the password value
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const signIn = async (e) => {
    try {
      const data = await doApiMethod("users/login", "POST", {
        email,
        password: values.password,
      });
      if (data.token) {
        alert("התחברת בהצלחה!");
        localStorage.setItem("tok", data.token);
        const userToSet = await doApiMethod("users/myinfo", "POST", {});
        if (!userToSet._id) {
          localStorage.removeItem("tok");
        }
        navigate("/");
      }
    } catch (err) {
      alert("ישנה תקלה, אנא נסו שוב במועד מאוחר יותר...");
      console.log(err);
    }
  };

  const register = async (e) => {
    try {
      let data = await doApiMethod("users/register", "POST", {
        email,
        password: values.password,
      });
      if (data._id) {
        console.log(data._id);
        const dataLog = await doApiMethod("users/login", "POST", {
          email,
          password: values.password,
        });
        // alert(dataLog);
        localStorage.setItem("tok", dataLog.token);
        const userToSet = await doApiMethod("users/myinfo", "POST", {});
        if (!userToSet._id) {
          localStorage.removeItem("tok");
        }
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="loginPage-wrapper">
      <Isloggedin />
      <Link to={"/"}>
        <div className="loginPage-lockicon-div">
          <LockIcon className="loginPage-lock-icon" />
        </div>
      </Link>
      {/* <h1 className='loginPage-title'>Sign In</h1> */}
      <div className="input-wrpper">
        {/* Email's input */}
        <Box
          component="form"
          sx={{ "& > :not(style)": { m: 1, width: "32ch" } }}
          noValidate
          autoComplete="on"
        >
          <TextField
            id="outlined-basic"
            label="Email Address*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </Box>

        {/* Password's input */}
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <form>
            <div>
              <FormControl
                sx={{ m: 1, width: "32ch" }}
                variant="outlined"
                fullWidth
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password*
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  autoComplete="off"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
          </form>
        </Box>
      </div>
      <div className="loginPage-checkbox-div">
        <Checkbox {...label} defaultChecked />
        <h6>Remember Me</h6>
      </div>

      <div className="signin-wrapper">
        <p className="termOfUse">
          By signing-in you agree to the Store's owner condition of use & sale
        </p>
        <Stack spacing={2} direction="row" width={"32ch"}>
          <Button type="submit" onClick={signIn} variant="contained" fullWidth>
            Sign In
          </Button>
        </Stack>
          <p className="register-btn" onClick={register}>Dont have an account? sign up</p>        
      </div>
    </div>
  );
};

export default LoginPage;
