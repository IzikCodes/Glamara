export default function Loader() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black px-4 text-center">
      {/* Logo + Brand Name */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <img
            src="/images/glamara.png"
            alt="GLAMARA Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain animate-heartbeat"
          />
          <h1 className="text-2xl sm:text-3xl font-bold tracking-wide brand-gradient animate-fadeInHeartbeat">
            GLAMARA
          </h1>
        </div>

        {/* Loading Paragraphs */}
        <div className="flex flex-col gap-2">
          <p className="text-white text-xs sm:text-sm tracking-[0.25em] opacity-60 animate-pulse">
            Where Style Becomes Story
          </p>
          <p className="text-white text-xs sm:text-sm tracking-[0.25em] opacity-60 animate-pulse">
            loading
          </p>
        </div>
      </div>
    </div>
  );
}
