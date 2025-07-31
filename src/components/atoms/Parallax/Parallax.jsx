import { ParallaxBanner } from "react-scroll-parallax"

export const Parallax = ({ image, description }) => {
    return (
        <ParallaxBanner
            layers={[
                { image: image, speed: -50, expanded: false, className: "object-cover"}
            ]}
            className="aspect-[2/1] w-full h-screen relative"
        >
            <div className="absolute inset-0 flex items-center justify-start max-w-4xl ml-32">
                <h1 className="text-7xl font-semibold text-white">{description}</h1>
            </div>
        </ParallaxBanner>
    )
}