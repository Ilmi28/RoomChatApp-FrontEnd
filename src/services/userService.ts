import apiClient from "../services/apiClient.ts";
import { useState } from "react";

const UserService = () => {
  const [isUserLoggedInVar, setUserLoggedIn] = useState(false);

  const isUserLoggedIn = () => {
    apiClient
      .get("user/user-exists/" + document.cookie.split("=")[1])
      .then((result) => {
        setUserLoggedIn(result.data);
      });
    return isUserLoggedInVar;
  };
};

export default UserService;
