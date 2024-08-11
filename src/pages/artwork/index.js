import ClientLayout from "@/components/Layout/ClientLayout";

import UploadArtwork from "@/components/pages/Artwork";
import MetaData from "@/components/ui/MetaData";
import withAuth from "@/hoc/withAuth";

const Artwork = () => {
  return (
    <ClientLayout>
      <MetaData title="Artwork" />
      <UploadArtwork />
    </ClientLayout>
  );
};

export default withAuth(Artwork);
