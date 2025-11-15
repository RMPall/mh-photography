export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-12 font-light">About Me</h1>

        <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 mb-16">
          <div className="aspect-[3/4] bg-gray-200">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">Photographer Portrait</p>
              </div>
            </div>
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
