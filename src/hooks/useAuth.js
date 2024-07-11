// hooks/useAuth.js

import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import useToastMessage from "./useToastMessage";

export const useAuth = () => {
  const showToastMessage = useToastMessage();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Check if token is in localStorage
    const storedSession =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("session"))
        : null;
    const storedUser =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("user") || "")
        : null;

    if (storedSession && storedUser) {
      setSession(storedSession);
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

      let session;
      let user;

      const res = await axios.post(
        `https://printlabapi.devtaijul.com/api/v1/login`,
        {
          email: credentials.email,
          password: credentials.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res?.data?.data;

      session = {
        token: data?.token,
        token_type: data?.tokenType,
      };
      user = data?.user;

      /*  if (typeof window !== "undefined") {
        const users = JSON.parse(localStorage.getItem("users"));
        const existUser = users?.find(
          (u) =>
            u.email === credentials.email && u.password === credentials.password
        );
        if (!existUser) {
          toast.error("Invalid credentials");
          throw new Error("Invalid credentials");
        } else {
          session = {
            token: "123456",
            token_type: "Bearer",
          };
          user = {
            id: existUser.id,
            email: existUser.email,
            first_name: existUser.first_name,
            last_name: existUser.last_name,
            customer_type: existUser.customer_type,
          };
        }
      } */

      // Save user and token to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("session", JSON.stringify(session));
      }

      setUser(user);
      setSession(session);
      setIsAuthenticated(true);
      toast.success(data.message || "Login successful");
      router.push("/");
    } catch (error) {
      showToastMessage(error?.response?.data?.message || "Login failed");
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("session");
    }
    setUser(null);
    setSession(null);
    setIsAuthenticated(false);
    router.push("/");
  };

  const register = async ({ token, token_type, user }) => {
    try {
      const session = {
        token,
        token_type,
      };

      // Save user and token to localStorage
      if (typeof window !== "undefined") {
        await localStorage.setItem("user", JSON.stringify(user));
        await localStorage.setItem("session", JSON.stringify(session));
      }

      setUser(user);
      setSession(session);
      setIsAuthenticated(true);
      toast.success("Registration successful");

      // Redirect to verify email page

      if (!user.email_verified_at) {
        router.push("/verify-email-alert");
      }
    } catch (error) {}
  };

  return { isAuthenticated, user, session, login, logout, register };
};
