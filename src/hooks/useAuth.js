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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if token is in localStorage
    const storedSession =
      typeof window !== "undefined" ? localStorage.getItem("session") : null;
    const storedUser =
      typeof window !== "undefined" ? localStorage.getItem("user") : null;

    if (storedSession && storedUser) {
      setSession(JSON.parse(storedSession));
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
      setIsLoading(false);
    } else {
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  }, []);

  const login = async (credentials, { redirect_url }) => {
    try {
      let session;
      let user;

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
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

      // Save user and token to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("session", JSON.stringify(session));
      }

      setUser(user);
      setSession(session);
      setIsAuthenticated(true);
      toast.success(data.message || "Login successful");
      return {
        status: "success",
        message: data.message,
      };
    } catch (error) {
      showToastMessage(error?.response?.data?.message || "Login failed");
      setIsAuthenticated(false);
      return {
        status: "error",
      };
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

  return { isAuthenticated, user, session, login, logout, register, isLoading };
};
