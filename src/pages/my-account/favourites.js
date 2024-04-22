import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import React from "react";

const Favourites = () => {
  return (
    <ClientLayout>
      <AccountLayout breadcrumb="Favourites">
        <section className="py-4 ">
          <div className="w-full px-3 py-5 text-sm text-center border-2 rounded-md border-primary bg-primary-light text-secondgraphy">
            <p>You dont have any Fabourites saved yet.</p>
          </div>
        </section>{" "}
      </AccountLayout>
    </ClientLayout>
  );
};

export default Favourites;
