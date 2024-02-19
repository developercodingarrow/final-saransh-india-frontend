import React, { useEffect, useState } from "react";
import { isAuth } from "../Actions/authAction";
import { useRouter } from "next/router";

export default function AdminAuth({ children }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(isAuth());
    const checkAuth = async () => {
      const auth = await isAuth();

      if (!auth) {
        router.push("/userauth/login");
      } else if (auth.role !== "admin" || auth.role !== "super-admin") {
        router.push("/super-admin");
      } else {
        setIsLoading(false); // Authentication check complete
      }
    };

    checkAuth();
  }, []);

  if (!isLoading) {
    return null; // or return a loading indicator component
  }

  // Render children if authentication check is complete
  return <div>{children}</div>;
}
