import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Family & Portrait Photography",
      description:
        "Capture your family's unique story with authentic, natural photographs. Perfect for family reunions, milestone celebrations, or just because.",
      features: [
        "1-2 hour session",
        "Location of your choice",
        "30-50 edited high-resolution images",
        "Online gallery",
      ],
      price: "From £350",
    },
    {
      title: "Event Photography",
      description:
        "Professional coverage of your special occasions including weddings, parties, and corporate events. Candid moments and beautiful compositions.",
      features: [
        "Full day coverage",
        "Two photographers available",
        "100+ edited images",
        "Print-ready files",
      ],
      price: "From £800",
    },
    {
      title: "Individual Portraits",
      description:
        "Professional headshots and personal portraits for business, social media, or personal use. Studio or outdoor sessions available.",
      features: [
        "1 hour session",
        "Multiple outfit changes",
        "15-20 edited images",
        "Professional retouching",
      ],
      price: "From £250",
    },
    {
      title: "Street & Documentary",
      description:
        "Urban photography and documentary projects capturing the essence of city life and human stories in authentic, artistic ways.",
      features: [
        "Custom project scope",
        "Multiple locations",
        "Editorial-style editing",
        "Print and digital rights",
      ],
      price: "Custom pricing",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-6 font-light">
          Services
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Professional photography services tailored to your needs. Every session is customized to
          capture your unique story.
        </p>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-t border-gray-200 pt-12 grid md:grid-cols-[2fr,1fr] gap-12"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-serif mb-4 font-light">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-start justify-end">
                <p className="text-xl font-serif">{service.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-serif mb-6 font-light">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Let's discuss your photography needs and create something beautiful together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 bg-black text-white text-sm uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
