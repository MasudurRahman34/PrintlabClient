import ClientLayout from "@/components/Layout/ClientLayout";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

export default function Privacy() {
  return (
    <ClientLayout>
      <div className="container px-8 py-16 mx-auto">
        <PrivacyPolicyContent />
      </div>
    </ClientLayout>
  );
}
