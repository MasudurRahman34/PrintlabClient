import ClientLayout from "@/components/Layout/ClientLayout";

import ManullyAddress from "@/components/pages/delivery/ManullyAddress";
import withAuth from "@/hoc/withAuth";

const Checkout = () => {
  return (
    <ClientLayout>
      <ManullyAddress />
    </ClientLayout>
  );
};

export default withAuth(Checkout);
