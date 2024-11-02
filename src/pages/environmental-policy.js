import EnvironmentalPolicyContent from "@/components/EnvironmentalPolicyContent";
import ClientLayout from "@/components/Layout/ClientLayout";

export default function EnvironmentalPolicy() {
  return (
    <ClientLayout>
      <div className="container px-8 py-16 mx-auto">
        <h1 className="mb-12 text-5xl font-extrabold text-center text-gray-800">
          Environmental Policy
        </h1>
        <EnvironmentalPolicyContent />
      </div>
    </ClientLayout>
  );
}
