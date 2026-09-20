import Image from "next/image";

const credentials = [
  {
    title: "Photography",
    description:
      "Portraits • Families & Couples • Events & Celebrations • Corporate • Model & Portfolio • Cultural Events • Live Performances • Street Photography",
  },
  {
    title: "Videography & Cinematography",
    description:
      "Cinematic filming and visual storytelling for events, performances, portraits and creative projects.",
  },
  {
    title: "Certified Colourist",
    description:
      "Professionally trained in colour grading, with a focus on natural skin tones, colour, mood and consistency in the final image and film.",
  },
  {
    title: "Certified Drone Pilot",
    description:
      "Certified drone pilot and registered drone operator in the UK, offering aerial photography and cinematic drone videography.",
  },
  {
    title: "Advanced Aerial Cinematography",
    description:
      "Professionally trained in Advanced Aerial Cinematography, bringing cinematic movement, composition and creative aerial perspectives into film and photography.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 font-light">About</h1>

        <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 mb-16">
          <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden">
            <Image
              src="/images/about/photographer.jpg"
              alt="Mahesh Padmanabhan"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-2xl font-serif mb-2 font-light">
                <span className="font-bold">7 Shades</span>
              </h2>
              <p className="text-lg font-serif mt-3 mb-4">Mahesh Padmanabhan</p>
            </div>
            <p>
              7 Shades is a photography and filmmaking studio founded by Mahesh Padmanabhan, based
              in London and focused on capturing people, moments and stories through natural and
              creative visual storytelling.
            </p>
            <p>
              Mahesh works across a wide range of photography, including portraits, family and
              couple shoots, events and celebrations, corporate photography, model and portfolio
              shoots, cultural events, live performances and street photography. His approach is to
              make people feel comfortable in front of the camera, allowing genuine expressions and
              natural moments to become part of the story.
            </p>
            <p>
              Alongside photography, Mahesh works in videography and cinematography, bringing
              together photography and film to offer a wider range of creative possibilities through
              7 Shades. He is also a certified colourist, with professional training in colour
              grading, giving particular attention to colour, skin tones and the overall look and
              feel of the finished work.
            </p>
            <p>
              Mahesh is also a certified drone pilot and registered drone operator in the UK, with
              specialist training in Advanced Aerial Cinematography. This adds another perspective
              to the work of 7 Shades, with aerial photography and cinematic drone footage available
              for suitable projects.
            </p>
            <p>
              Every project is approached individually, whether it&apos;s a family portrait, a
              professional portfolio, a corporate shoot, a special event or a film. The aim is
              simple — to create photographs and films that look beautiful, feel natural and, most
              importantly, mean something to the people in them.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-serif mb-8 font-light">Experience &amp; Credentials</h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            {credentials.map((credential) => (
              <div key={credential.title}>
                <h3 className="font-medium mb-2">{credential.title}</h3>
                <p className="text-sm leading-relaxed">{credential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
