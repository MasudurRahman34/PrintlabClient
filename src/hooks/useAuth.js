// hooks/useAuth.js

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export const useAuth = () => {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies(["user", "session"]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Retrieve session and user cookies
    const storedSession = cookies.session;
    const storedUser = cookies.user;

    if (storedSession && storedUser) {
      setSession(storedSession);
      setUser(storedUser);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }, [cookies]);

  const login = async ({ token, token_type, user }) => {
    try {
      const session = {
        token,
        token_type,
      };

      // Set user and session cookies with an expiration time
      setCookie("user", user, { path: "/", maxAge: 3600 }); // 1-hour expiration
      setCookie("session", session, { path: "/", maxAge: 3600 });

      setUser(user);
      setSession(session);
      setIsAuthenticated(true);
      router.push("/");
    } catch (error) {
      setIsAuthenticated(false);
    }
  };

  const logout = async () => {
    /* const response = await axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      )
      .then((res) => res.data);
    console.log(response); */

    // Remove user and session cookies
    removeCookie("user", { path: "/" });
    removeCookie("session", { path: "/" });

    setUser(null);
    setSession(null);
    setIsAuthenticated(false);
    router.push("/login");
  };

  return { isAuthenticated, user, session, login, logout, isLoading };
};
