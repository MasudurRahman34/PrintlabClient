import React, { useCallback, useState } from "react";
import ClientHeader from "../Header/ClientHeader";
import ClientFooter from "../Footer/ClientFooter";
import MobileNav from "../Footer/MobileNav";
import Hoverbasket from "@/pages/hoverbasket";
import { useQuery } from "@tanstack/react-query";
import { getIncompleteCartTotalQuery } from "@/resolvers/mutation";

const ClientLayout = ({ children }) => {
  const [showbasket, setshowbasket] = useState(false);
  const showcards = () => {
    setshowbasket(!showbasket);
  };

  const hideBasket = () => {
    setshowbasket(false);
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: "get_cart_total",
    queryFn: getIncompleteCartTotalQuery,
  });

  const total_refetch = useCallback(() => {
    refetch();
    setshowbasket(false);
  }, [refetch]);

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { total_refetch, working: "working" });
    }
    return child;
  });

  return (
    <section className="flex flex-col w-full min-h-screen ">
      <header className="relative z-10 h-auto ">
        <ClientHeader
          showcards={showcards}
          hideBasket={hideBasket}
          total={data?.data}
          total_refetch={total_refetch}
        />
        <Hoverbasket
          show={showbasket}
          hideBasket={hideBasket}
          total_refetch={refetch}
        />
      </header>
      <main className="flex-1 ">{childrenWithProps}</main>
      <footer className="bg-secondgraphy min-h-40">
        <ClientFooter />
      </footer>
    </section>
  );
};

export default ClientLayout;
