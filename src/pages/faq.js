import FAQSection from "@/components/FAQSection";
import ClientLayout from "@/components/Layout/ClientLayout";

export default function FAQ() {
  return (
    <ClientLayout>
      <div className="container px-8 py-16 mx-auto">
        <h1 className="mb-12 text-5xl font-extrabold text-center text-gray-800">
          Frequently Asked Questions
        </h1>
        <FAQSection />
      </div>
    </ClientLayout>
  );
}
