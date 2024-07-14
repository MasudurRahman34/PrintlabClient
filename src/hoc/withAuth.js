import Loader from "@/components/Loader/Loader";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect, memo } from "react";

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const router = useRouter();
    const { isAuthenticated, isLoading } = useAuth();

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        router.replace("/login");
      }
    }, [isAuthenticated, router, isLoading]);

    if (isLoading) {
      return (
        <div className="container mx-auto min-h-[40vh] flex items-center justify-center">
          <Loader />
        </div>
      ); // or a loading spinner
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
