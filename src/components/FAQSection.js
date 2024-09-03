export default function FAQSection() {
  const faqs = [
    {
      question: "What types of printing services do you offer?",
      answer:
        "We offer a wide range of printing services including business cards, flyers, brochures, banners, posters, custom T-shirts, and large format printing.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order through our website by selecting the service you need and providing the necessary details. Alternatively, you can contact us directly via phone or email.",
    },
    {
      question: "What is your turnaround time?",
      answer:
        "Our standard turnaround time is 3-5 business days. However, it may vary depending on the complexity and volume of the order. We also offer rush services for an additional fee.",
    },
    {
      question: "Do you offer design services?",
      answer:
        "Yes, we have an in-house design team that can assist you with creating custom designs for your printing needs. Simply provide us with your ideas and we’ll take care of the rest.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers. Payment is required upfront before we begin processing your order.",
    },
    {
      question: "Can I see a proof before printing?",
      answer:
        "Yes, we provide digital proofs for your approval before we proceed with the printing process. This ensures that everything is correct and to your satisfaction.",
    },
  ];

  return (
    <div className="p-8 space-y-8 bg-white rounded-lg shadow-lg">
      {faqs.map((faq, index) => (
        <div key={index} className="pb-6 border-b border-gray-200">
          <h3 className="mb-4 text-2xl font-semibold text-gray-900">
            {faq.question}
          </h3>
          <p className="text-lg leading-relaxed text-gray-600">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}
