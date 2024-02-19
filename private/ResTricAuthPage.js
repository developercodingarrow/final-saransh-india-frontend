import React, { useEffect, useState } from "react";
import { isAuth } from "../Actions/authAction";
import { useRouter } from "next/router";

export default function ResTricAuthPage({ children }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(isAuth());
    const checkAuth = async () => {
      const auth = await isAuth();

      if (auth) {
        router.push("/");
        setIsLoading(false);
      } else {
        router.push("/userauth/login");
        setIsLoading(true);
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
