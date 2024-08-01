import ClientLayout from "@/components/Layout/ClientLayout";

import UploadArtwork from "@/components/pages/Artwork";
import withAuth from "@/hoc/withAuth";

const Artwork = () => {
  return (
    <ClientLayout>
      <UploadArtwork />
    </ClientLayout>
  );
};

export default withAuth(Artwork);
