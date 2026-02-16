import Image from "next/image";

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
              <p className="text-lg font-serif mt-3 mb-4">
                Mahesh Padmanabhan
              </p>
            </div>
            <p>
              7 Shades is a professional photography studio founded by Mahesh Padmanabhan, based in London and dedicated to capturing
              the full spectrum of human emotion and experience through authentic visual storytelling.
            </p>
            <p>
              With over a decade of experience, Mahesh Padmanabhan specializes in family portraits, event photography,
              and street photography. His approach is to create a comfortable environment where genuine
              emotions can shine through, revealing the many shades of each moment.
            </p>
            <p>
              Every photograph is an opportunity to preserve memories that will last a lifetime. At 7 Shades,
              we believe in the power of visual storytelling and strive to create images that resonate
              with depth, emotion, and authenticity—capturing not just what you see, but all the shades
              of what you feel.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-serif mb-6 font-light">Experience</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-medium mb-2">Professional Photography</h3>
              <p className="text-sm">
                10+ years of experience in family, portrait, event, and street photography
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Published Work</h3>
              <p className="text-sm">
                Featured in various photography publications and online platforms
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Awards & Recognition</h3>
              <p className="text-sm">Multiple awards for outstanding photography work</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
