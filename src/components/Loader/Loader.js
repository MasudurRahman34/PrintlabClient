import { FadeLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="h-full flex justify-center items-center">
        <FadeLoader color="#FFD333"   speedMultiplier={4}/>
    </div>
  )
}
