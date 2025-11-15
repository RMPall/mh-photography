import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 font-light">About Me</h1>

        <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 mb-16">
          <div className="relative aspect-[3/4] bg-gray-200 overflow-hidden">
            <Image
              src="/images/about/photographer.jpg"
              alt="Mahesh Padmanabhan - Photographer"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              I'm Mahesh Padmanabhan, a professional photographer based in London with a passion
              for capturing authentic moments and telling visual stories.
            </p>
            <p>
              With over a decade of experience, I specialize in family portraits, event photography,
              and street photography. My approach is to create a comfortable environment where genuine
              emotions can shine through.
            </p>
            <p>
              Every photograph is an opportunity to preserve memories that will last a lifetime. I
              believe in the power of visual storytelling and strive to create images that resonate
              with emotion and authenticity.
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
