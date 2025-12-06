import { FiMessageSquare, FiTarget, FiFileText, FiDollarSign, FiHome, FiHelpCircle } from 'react-icons/fi';

export default function SlantedSection() {
  const stages = [
    {
      number: "01",
      title: "Counselling Meeting",
      description: "Discuss snap options",
      icon: FiMessageSquare,
      color: "bg-white/10"
    },
    {
      number: "02",
      title: "Choosing Universities",
      description: "Selecting the right universities",
      icon: FiTarget,
      color: "bg-white/15"
    },
    {
      number: "03",
      title: "Applications",
      description: "Handling admission process",
      icon: FiFileText,
      color: "bg-white/20"
    },
    {
      number: "04",
      title: "Financial Guidance",
      description: "Guidance on financial matters",
      icon: FiDollarSign,
      color: "bg-white/25"
    },
    {
      number: "05",
      title: "Accommodation",
      description: "Finding suitable housing",
      icon: FiHome,
      color: "bg-white/30"
    },
    {
      number: "06",
      title: "Further Assistance",
      description: "Ongoing support and help",
      icon: FiHelpCircle,
      color: "bg-white/35"
    }
  ];

  return (
    <section
      className="
        bg-gradient-to-br from-[#FF9800] to-[#FF5722]
        text-white
        py-24 px-6
        [clip-path:polygon(0_6%,100%_0,100%_94%,0_100%)]
        relative
        overflow-hidden
      "
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-white"></div>
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

        {/* Process Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className={`
                  ${stage.color}
                  backdrop-blur-sm
                  rounded-2xl
                  p-6
                  border border-white/20
                  transform
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-2xl
                  h-full
                `}>
                  {/* Stage Number */}
                  <div className="text-6xl font-bold text-white/20 mb-4 group-hover:text-white/30 transition-colors">
                    {stage.number}
                  </div>
                  
                  {/* Icon and Title Container */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="
                      bg-white/20
                      p-3
                      rounded-xl
                      group-hover:bg-white/30
                      transition-colors
                      flex-shrink-0
                    ">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold pt-1">
                      {stage.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white/80 pl-14">
                    {stage.description}
                  </p>
                  
                  {/* Connecting Line (except for last items) */}
                  {index < stages.length - 1 && (
                    <div className="
                      absolute
                      top-1/2
                      -right-4
                      w-8
                      h-0.5
                      bg-white/30
                      hidden
                      lg:block
                      group-hover:bg-white/50
                      transition-colors
                    "></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="
            group
            bg-white
            text-[#FF9800]
            px-8
            py-4
            rounded-full
            font-bold
            text-lg
            hover:bg-gray-100
            transform
            hover:scale-105
            transition-all
            duration-300
            shadow-lg
            hover:shadow-xl
            inline-flex
            items-center
            gap-3
          ">
            APROACH US NOW
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Decorative dots */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[1, 2, 3].map((dot) => (
            <div
              key={dot}
              className="w-2 h-2 rounded-full bg-white/30"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}