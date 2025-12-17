import profileImage from 'figma:asset/83dd676e2bd430e9b5ef978ce2bf934051d0c795.png';

export default function AvatarHub() {
  return (
    <div className="relative z-10">
      {/* Main Avatar Container - Professional & Prominent */}
      <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full">
        {/* Premium Border Rings */}
        <div className="absolute inset-0 rounded-full border-4 border-violet-500/70 shadow-[0_0_40px_rgba(126,34,206,0.5)]" />
        <div className="absolute inset-2 rounded-full border-2 border-purple-400/50" />

        {/* Professional Image Container */}
        <div className="absolute inset-3 rounded-full overflow-hidden bg-gradient-to-br from-violet-900/30 to-purple-900/30 backdrop-blur-sm">
          <img 
            src={profileImage} 
            alt="Vishnu Vardhan Burri - Software Development Engineer" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Premium Static Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-blue-500/20 blur-2xl -z-10" />
      </div>

      {/* Premium Title Badge */}
      <div className="absolute -bottom-10 md:-bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <div className="px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-violet-600/60 to-purple-600/60 backdrop-blur-md border border-violet-500/60 rounded-full shadow-[0_0_30px_rgba(126,34,206,0.4)]">
          <p className="text-white tracking-wider text-xs md:text-sm">LEAD DEVELOPER</p>
          <p className="text-violet-300 text-center text-[10px] md:text-xs">Software Development Engineer</p>
        </div>
      </div>
    </div>
  );
}