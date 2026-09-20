import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Portraits, Families & Couples",
      description:
        "Portrait, family and couple sessions shot to feel relaxed and unforced. The aim is to make people comfortable in front of the camera, so genuine expressions and natural moments become part of the story.",
      features: [
        "Indoor or outdoor locations",
        "Relaxed, natural direction on the day",
        "Edited, high-resolution images",
        "Professional colour grading",
      ],
    },
    {
      title: "Model & Portfolio Shoots",
      description:
        "Portfolio and headshot sessions for models, performers and professionals, built around the look and range you need to present.",
      features: [
        "Studio or location sessions",
        "Multiple looks and setups",
        "Careful attention to skin tones",
        "Retouching and colour grading",
      ],
    },
    {
      title: "Events & Celebrations",
      description:
        "Coverage of the occasions that matter — celebrations, milestones and family gatherings — photographed as they unfold, with an eye for the moments between the formal ones.",
      features: [
        "Candid and posed coverage",
        "Photography and film available together",
        "Edited gallery of images",
        "Aerial coverage where suitable",
      ],
    },
    {
      title: "Cultural Events & Live Performances",
      description:
        "Photography and filming for cultural events, stage productions and live performances, working around the lighting and pace of the room without interrupting it.",
      features: [
        "Stage and low-light experience",
        "Discreet on-the-night coverage",
        "Stills and video options",
        "Colour grading for stage lighting",
      ],
    },
    {
      title: "Corporate Photography",
      description:
        "Headshots, team portraits, conferences and workplace photography for businesses, delivered with a consistent look across the whole set.",
      features: [
        "On-site at your workplace or venue",
        "Consistent framing and grading across the set",
        "Headshots, teams and event coverage",
        "Files prepared for web and print",
      ],
    },
    {
      title: "Videography & Cinematography",
      description:
        "Cinematic filming and visual storytelling for events, performances, portraits and creative projects — bringing photography and film together for a wider range of creative possibilities.",
      features: [
        "Cinematic filming and edit",
        "Colour grading by a certified colourist",
        "Photography and film in one booking",
        "Aerial footage where suitable",
      ],
    },
    {
      title: "Aerial Photography & Drone Cinematography",
      description:
        "Aerial photography and cinematic drone footage, shot by a certified drone pilot and registered UK drone operator with specialist training in Advanced Aerial Cinematography.",
      features: [
        "Certified pilot, registered UK operator",
        "Advanced Aerial Cinematography trained",
        "Cinematic aerial movement and composition",
        "Subject to site and flight conditions",
      ],
    },
    {
      title: "Street & Documentary",
      description:
        "Street photography and documentary projects capturing city life and human stories as they happen, in an authentic, editorial style.",
      features: [
        "Custom project scope",
        "Multiple locations",
        "Editorial-style editing",
        "Print and digital rights",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-6 font-light">
          Services
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Photography and filmmaking for people, moments and stories. Every project is approached
          individually, so get in touch and we can shape a session around what you need.
        </p>

        <div className="space-y-16">
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
                <Link
                  href="/contact"
                  className="text-sm uppercase tracking-[0.15em] border-b border-black pb-1 hover:opacity-60 transition-opacity whitespace-nowrap"
                >
                  Enquire
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-serif mb-6 font-light">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Let&apos;s discuss your photography or film project and create something beautiful
            together.
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
