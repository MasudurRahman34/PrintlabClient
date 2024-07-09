// hooks/useAuth.js

import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export const useAuth = () => {
  const router = useRouter();
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
    console.log(credentials);
    try {
      /* const response = await axios.post("/api/auth/login", credentials);
      const { user, token } = response.data; */

      let token;
      let user;
      if (typeof window !== "undefined") {
        const users = JSON.parse(localStorage.getItem("users"));
        const existUser = users?.find(
          (u) =>
            u.email === credentials.email && u.password === credentials.password
        );
        if (!existUser) {
          toast.error("Invalid credentials");
          throw new Error("Invalid credentials");
        } else {
          token = "fake_token";
          user = {
            id: existUser.id,
            email: existUser.email,
            first_name: existUser.first_name,
            last_name: existUser.last_name,
            customer_type: existUser.customer_type,
          };
        }
      }

      // Save user and token to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
      }

      setUser(user);
      setToken(token);
      setIsAuthenticated(true);
      toast.success("Login successful");
    } catch (error) {
      toast.error("Login failed");
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
    router.push("/");
  };

  return { isAuthenticated, user, token, login, logout };
};
