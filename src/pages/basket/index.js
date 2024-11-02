import ClientLayout from "@/components/Layout/ClientLayout";
import BusketPageComponent from "@/components/pages/Busket/BusketPageComponent";
import MetaData from "@/components/ui/MetaData";

const Checkout = () => {
  return (
    <ClientLayout>
      <MetaData title="Basket" />
      <BusketPageComponent />
    </ClientLayout>
  );
};

export default Checkout;
