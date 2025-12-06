export default function SlantedSection() {
  const stages = [
    {
      number: "01",
      title: "Counselling Meeting",
      description: "Discuss snap options",
      icon: (
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.8L3 20l1.49-3.72C3.55 15.02 3 13.57 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      )
    },
    {
      number: "02",
      title: "Choosing Universities",
      description: "Selecting the right universities",
      icon: (
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      )
    },
    {
      number: "03",
      title: "Applications",
      description: "Handling admission process",
      icon: (
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M20 21V7a2 2 0 00-2-2h-5l-2-2H6a2 2 0 00-2 2v14" />
      )
    },
    {
      number: "04",
      title: "Financial Guidance",
      description: "Guidance on financial matters",
      icon: (
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 .895-4 2s1.79 2 4 2 4 .895 4 2-1.79 2-4 2M12 4v2m0 12v2" />
      )
    },
    {
      number: "05",
      title: "Accommodation",
      description: "Finding suitable housing",
      icon: (
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      )
    },
    {
      number: "06",
      title: "Further Assistance",
      description: "Ongoing support and help",
      icon: (
        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M8 14h8" />
      )
    }
  ];

  return (
    <section
      id="process"
      className="
        bg-gradient-to-br from-[#FF9800] to-[#FF5722]
        text-white
        py-24 px-6
        relative
        overflow-hidden
        transform-gpu
        [clip-path:polygon(0_3%,100%_0,100%_97%,0_100%)]
      "
    >
      {/* Optimized background blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,white_0%,transparent_60%),radial-gradient(circle_at_20%_80%,white_0%,transparent_60%)]">
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            OUR PROCESS
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A streamlined 6-stage approach to ensure your educational journey is smooth and successful
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stages.map((stage, index) => (
            <div key={index} className="group relative transform-gpu">
              <div className="
                bg-white/10
                backdrop-blur-[1px]
                rounded-2xl
                p-6
                border border-white/20
                transition-all duration-300
                hover:scale-105 hover:shadow-2xl
                h-full
              ">
                
                <div className="text-6xl font-bold text-white/20 mb-4 group-hover:text-white/30 transition-colors">
                  {stage.number}
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="
                    bg-white/20
                    p-3
                    rounded-xl
                    group-hover:bg-white/30
                    transition-colors
                    flex-shrink-0
                  ">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                      {stage.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold pt-1">{stage.title}</h3>
                </div>

                <p className="text-white/80 pl-14">{stage.description}</p>

                {index < stages.length - 1 && (
                  <div className="
                    absolute top-1/2 -right-4
                    w-8 h-0.5
                    bg-white/30
                    hidden lg:block
                    group-hover:bg-white/50
                    transition-colors
                  " />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="
            group
            bg-white text-[#FF9800]
            px-8 py-4
            rounded-full
            font-bold text-lg
            hover:bg-gray-100
            transform hover:scale-105
            transition-all duration-300
            shadow-lg hover:shadow-xl
            inline-flex items-center gap-3
          ">
            APROACH US NOW
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Decorative dots */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[1, 2, 3].map((dot) => (
            <div key={dot} className="w-2 h-2 rounded-full bg-white/30"></div>
          ))}
        </div>

      </div>
    </section>
  );
}
