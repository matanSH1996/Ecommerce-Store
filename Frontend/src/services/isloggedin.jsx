import React, { useEffect } from "react";
import { useStateValue } from "../components/contextProvider";
import { doApiMethod } from "./api";

const Isloggedin = () => {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    try {
      if (localStorage["tok"]) {
        const userToSet = await doApiMethod("users/myinfo", "POST", {});
        if (!userToSet._id) {
          localStorage.removeItem("tok");
          dispatch({
            type: "SET_USER",
            user: {},
          });
        } else {
          dispatch({
            type: "SET_USER",
            user: userToSet,
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return <></>;
};

export default Isloggedin;
