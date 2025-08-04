import { ParallaxBanner } from "react-scroll-parallax";

export const Parallax = ({ image, description }) => {
  return (
    <ParallaxBanner
      layers={[
        {
          image: image,
          speed: -50,
          expanded: false,
          className: "object-cover"
        },
        {
          speed: 0,
          children: (
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
          )
        }
      ]}
      className="aspect-[2/1] w-full h-screen relative"
    >
      <div className="absolute inset-0 flex items-center justify-start ml-32 mt-28">
        <div className="backdrop-blur-sm border border-white/100 rounded-xl px-8 py-6 shadow-lg max-w-3xl">
          <h1 className="text-5xl font-semibold text-white drop-shadow-md tracking-tight leading-tight">
            {description}
          </h1>
        </div>
      </div>
    </ParallaxBanner>
  );
};
