import ClientLayout from "@/components/Layout/ClientLayout";

import ManullyAddress from "@/components/pages/delivery/ManullyAddress";
import MetaData from "@/components/ui/MetaData";
import withAuth from "@/hoc/withAuth";

const Checkout = () => {
  return (
    <ClientLayout>
      <MetaData title="Checkout" />
      <ManullyAddress />
    </ClientLayout>
  );
};

export default withAuth(Checkout);
