import { useState, useEffect } from "react";
import { useRouter } from "next/router";
function ErrorBoundary({ children }) {
  const router = useRouter();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = () => {
      setHasError(true);
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  if (hasError) {
    return <div>Something went wrong.</div>;
  }
  return children;
}

export default ErrorBoundary;
