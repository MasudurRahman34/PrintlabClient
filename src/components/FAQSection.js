export default function FAQSection() {
  return (
    <div className="container px-8 py-16 mx-auto">
      {/* Page Header */}
      <h1 className="mb-12 text-5xl font-extrabold text-center text-gray-800">
        FAQ – PrintLab
      </h1>

      {/* FAQ Section */}
      <div className="space-y-12">
        {/* Question 1 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            1. How do you ensure the security of my personal data?
          </h2>
          <p className="leading-relaxed text-gray-700">
            At PrintLab, we take data protection very seriously. We implement
            robust security measures to prevent your data from unauthorized
            access, accidental loss, or misuse. We use SSL encryption during
            transactions and ensure that only authorized personnel handle your
            data, adhering to strict confidentiality agreements. For more
            details, please refer to our Privacy Policy.
          </p>
        </section>

        {/* Question 2 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            2. What is your approach to sustainability?
          </h2>
          <p className="leading-relaxed text-gray-700">
            PrintLab is committed to sustainability. We are working towards a
            net-zero carbon footprint by 2040. We print on 100% FSC-certified
            paper and are continuously investing in energy-efficient
            infrastructure, renewable energy, and sustainable shipping options.
            For more information, visit our Sustainability page.
          </p>
        </section>

        {/* Question 3 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            3. How long do you keep my data?
          </h2>
          <p className="leading-relaxed text-gray-700">
            We retain your personal data only as long as necessary to fulfill
            legal obligations or meet business requirements. Typically, data is
            stored for up to 7 years. For more information, you can check our
            Data Retention Policy.
          </p>
        </section>

        {/* Question 4 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            4. Do you offer any guarantees on print quality?
          </h2>
          <p className="leading-relaxed text-gray-700">
            Yes, at PrintLab, we follow ISO 9001:2015 standards, ensuring that
            our quality management systems are designed to meet and exceed
            customer expectations. Our goal is to provide high-quality, reliable
            products that help you succeed.
          </p>
        </section>

        {/* Question 5 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            5. How do you handle environmental management?
          </h2>
          <p className="leading-relaxed text-gray-700">
            We follow ISO 14001:2015 standards, focusing on sustainable
            practices across our production processes. We aim to minimize waste,
            use eco-friendly materials, and continuously improve our
            environmental impact.
          </p>
        </section>

        {/* Question 6 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            6. What kind of paper do you use?
          </h2>
          <p className="leading-relaxed text-gray-700">
            We use 100% FSC-certified paper in our printing processes. This
            ensures that our materials are sourced from sustainably managed
            forests.
          </p>
        </section>

        {/* Question 7 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            7. What industries do you serve?
          </h2>
          <p className="leading-relaxed text-gray-700">
            PrintLab works with a wide range of industries, including marketing
            agencies, design firms, retail businesses, and independent artists.
            We tailor our services to suit your needs, no matter the industry.
          </p>
        </section>

        {/* Question 8 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            8. What are your shipping options?
          </h2>
          <p className="leading-relaxed text-gray-700">
            We offer a range of shipping options to suit your timeline and
            budget. Additionally, we are working towards more sustainable
            shipping practices to reduce our environmental impact.
          </p>
        </section>

        {/* Question 9 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            9. Do you offer custom design services?
          </h2>
          <p className="leading-relaxed text-gray-700">
            Yes! We have a team of talented graphic designers and artists who
            can help you create the perfect design for your project.
          </p>
        </section>

        {/* Question 10 */}
        <section>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">
            10. What should I do if I need assistance with my order?
          </h2>
          <p className="leading-relaxed text-gray-700">
            If you need assistance, please don&apos; t hesitate to contact our
            customer support team. We&apos; re here to help you with any
            questions, from technical issues to product advice.
          </p>
        </section>
      </div>
    </div>
  );
}
