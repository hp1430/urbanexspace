import { ParallaxBanner } from "react-scroll-parallax"
import FirstParallaxImage from "../../../assets/firstParallax/FirstParallax.jpg"

export const FirstParallax = () => {
    return (
        <ParallaxBanner
            layers={[
                { image: FirstParallaxImage, speed: -35 }
            ]}
            className="aspect-[2/1]"
        >
            <div className="absolute inset-0 flex items-center justify-center max-w-4xl ml-32">
                <h1 className="text-7xl font-semibold text-white">TRANSFORM YOUR INTERIOR WITH URBANEX SPACE</h1>
            </div>
        </ParallaxBanner>
    )
}