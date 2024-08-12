import { FadeLoader, ScaleLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <ScaleLoader color="#1c4454" speedMultiplier={1} />
    </div>
  );
}
