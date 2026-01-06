import { FaHatCowboy } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Icon */}
        <div className="flex justify-center mb-8 text-blue-900">
          <FaHatCowboy size={64} aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
          About Big Hat Poland
        </h2>

        {/* Content */}
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>
            Welcome to Big Hat Poland, where creativity meets craftsmanship.
            We are a collective of talented designers, developers, and creative
            minds dedicated to bringing your vision to life with exceptional
            quality and innovative solutions.
          </p>

          <p>
            Our passion drives us to explore new possibilities in digital design
            and development. From conceptualization to execution, we work closely
            with our clients to understand their unique needs and deliver results
            that exceed expectations.
          </p>

          <p>
            With years of experience across various industries, our team brings
            a wealth of knowledge and expertise. We believe in the power of
            collaboration and the importance of creating meaningful experiences
            for users.
          </p>

          <p>
            At Big Hat Poland, we're committed to staying at the forefront of
            technology and design trends. Whether you're looking to establish
            your brand, redesign your digital presence, or launch a new project,
            we're here to help you succeed.
          </p>
        </div>

        {/* Values highlight */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-blue-900 mb-2 text-center">Quality</h3>
            <p className="text-sm text-gray-600 text-center">
              We deliver exceptional work that stands the test of time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-blue-900 mb-2 text-center">Innovation</h3>
            <p className="text-sm text-gray-600 text-center">
              We push boundaries and explore new creative possibilities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="font-semibold text-blue-900 mb-2 text-center">Partnership</h3>
            <p className="text-sm text-gray-600 text-center">
              We collaborate closely to ensure your goals become our mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
