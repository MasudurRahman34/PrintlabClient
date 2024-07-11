// hooks/useToastMessage.js
import { toast } from "react-hot-toast";

const useToastMessage = () => {
  const showToastMessage = (message) => {
    if (typeof message === "string") {
      // If message is a simple string
      toast.error(message);
    } else if (typeof message === "object") {
      // If message is an object of errors
      for (const key in message) {
        if (message.hasOwnProperty(key)) {
          message[key].forEach((error) => toast.error(error));
        }
      }
    } else {
      toast.error("An unknown error occurred.");
    }
  };

  return showToastMessage;
};

export default useToastMessage;
