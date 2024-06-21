import ClientLayout from "@/components/Layout/ClientLayout";
import { GoDotFill } from "react-icons/go";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import UploadArtwork from "@/components/pages/Artwork";

const Artwork = () => {
  const router = useRouter();
  return (
    <ClientLayout>
      <UploadArtwork />
    </ClientLayout>
  );
};

export default Artwork;
