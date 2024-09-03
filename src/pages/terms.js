import ClientLayout from "@/components/Layout/ClientLayout";
import TermsContent from "@/components/TermsContent";

export default function Terms() {
  return (
    <ClientLayout>
      <div className="container px-8 py-16 mx-auto">
        <h1 className="mb-12 text-5xl font-extrabold text-center text-gray-800">
          Terms & Conditions
        </h1>
        <TermsContent />
      </div>
    </ClientLayout>
  );
}
