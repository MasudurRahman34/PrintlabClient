import { cn } from "@/lib/utils";

const CheckStatus = ({ className, loading = false, text, status }) => {
  return (
    <div
      class="inline-block h-6 w-6 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        {text}
      </span>
    </div>
  );
};
export default CheckStatus;
