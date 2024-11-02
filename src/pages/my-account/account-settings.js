import AccountLayout from "@/components/Layout/AccountLayout";
import ClientLayout from "@/components/Layout/ClientLayout";
import ArtworkService from "@/components/my-account/accountSetting/ArtworkService";
import Password from "@/components/my-account/accountSetting/Password";
import PriceVatPreference from "@/components/my-account/accountSetting/PriceVatPreference";
import UserInformation from "@/components/my-account/accountSetting/UserInformation";
import MetaData from "@/components/ui/MetaData";
import React from "react";

const AccountSettings = () => {
  return (
    <ClientLayout>
      <MetaData title="Account Settings" />
      <AccountLayout breadcrumb="Account Settings">
        <UserInformation />
        <Password />
        <ArtworkService />
        <PriceVatPreference />
      </AccountLayout>
    </ClientLayout>
  );
};

export default AccountSettings;
