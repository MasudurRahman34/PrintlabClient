import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect, memo } from "react";

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/login");
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null; // or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };

  // Set a display name for easier debugging
  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

  return memo(WithAuth);
};

// Helper function to get the display name of the wrapped component
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withAuth;
