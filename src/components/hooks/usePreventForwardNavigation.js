import { useEffect } from "react";
import { useRouter } from "next/router";

function usePreventForwardNavigation() {
  const router = useRouter();

  useEffect(() => {
    // Add a dummy history entry when the component mounts
    const addDummyEntry = () => {
      window.history.pushState(
        { preventForward: true },
        "",
        window.location.href
      );
    };

    const handlePopState = (event) => {
      if (event.state && event.state.preventForward) {
        // If the preventForward flag is present, push the dummy entry again
        addDummyEntry();
      }
    };

    // Push the initial dummy entry
    addDummyEntry();

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [router]);
}

export default usePreventForwardNavigation;
