import ClientLayout from "@/components/Layout/ClientLayout";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

export default function Privacy() {
  return (
    <ClientLayout>
      <div className="container px-8 py-16 mx-auto">
        <h1 className="mb-12 text-5xl font-extrabold text-center text-gray-800">
          Privacy & Cookie Policy
        </h1>
        <PrivacyPolicyContent />
      </div>
    </ClientLayout>
  );
}
