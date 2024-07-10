import { cn } from "@/lib/utils";
import { TiInputChecked } from "react-icons/ti";
import { IoIosCloseCircleOutline } from "react-icons/io";

const CheckStatus = ({ className, text, status, isMatched = false }) => {
  return (
    <div className="flex items-center justify-start gap-4">
      {status ? (
        <div
          class="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
        </div>
      ) : isMatched ? (
        <div>
          <TiInputChecked className="w-6 h-6 text-green-600" />
        </div>
      ) : (
        <div>
          <IoIosCloseCircleOutline className="w-6 h-6 text-red-600" />
        </div>
      )}
      <h1
        className={`font-semibold ${
          status || isMatched ? "text-green-600" : "text-red-600"
        }`}
      >
        {text}
      </h1>
    </div>
  );
};
export default CheckStatus;
