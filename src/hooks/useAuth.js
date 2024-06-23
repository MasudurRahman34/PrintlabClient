// hooks/useAuth.js

import { useState, useEffect } from "react";
import axios from "axios";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check if token is in localStorage
    const storedToken =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const storedUser =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : null;

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(storedUser);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const login = async (credentials) => {
    try {
      /* const response = await axios.post("/api/auth/login", credentials);
      const { user, token } = response.data; */

      let token;
      let user;
      if (typeof window !== "undefined") {
        const users = JSON.parse(localStorage.getItem("users"));
        const existUser = users.find(
          (u) =>
            u.email === credentials.email && u.password === credentials.password
        );
        if (!existUser) {
          throw new Error("Invalid credentials");
        }

        token = "fake_token";
        user = {
          id: "dskfjsdlkfe",
          email: existUser.email,
          name: "Tanmoy",
        };
      }

      // Save user and token to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
      }

      setUser(user);
      setToken(token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login error", error);
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
  };

  return { isAuthenticated, user, token, login, logout };
};
