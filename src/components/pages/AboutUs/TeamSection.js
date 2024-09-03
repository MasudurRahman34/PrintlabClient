export default function TeamSection() {
  return (
    <section className="mb-12 custom_container">
      <h2 className="mb-4 text-3xl font-bold text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150/0000FF/808080?text=John+Doe"
            alt="Team Member 1"
            className="w-32 h-32 mx-auto mb-4 rounded-full"
          />
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-gray-700">CEO & Founder</p>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150/FF0000/FFFFFF?text=Jane+Smith"
            alt="Team Member 2"
            className="w-32 h-32 mx-auto mb-4 rounded-full"
          />
          <h3 className="text-xl font-semibold">Jane Smith</h3>
          <p className="text-gray-700">Head of Marketing</p>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150/008000/FFFFFF?text=Mike+Johnson"
            alt="Team Member 3"
            className="w-32 h-32 mx-auto mb-4 rounded-full"
          />
          <h3 className="text-xl font-semibold">Mike Johnson</h3>
          <p className="text-gray-700">Lead Designer</p>
        </div>
      </div>
    </section>
  );
}
