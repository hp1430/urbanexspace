import { Card } from "../../atoms/Card/Card"
import ourVision from "../../../assets/aboutUs/ourVision.webp"
import ourMission from "../../../assets/aboutUs/ourConstruction.webp"
import ourValues from "../../../assets/aboutUs/ourValues.webp"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

export const AboutUs = () => {

    const location = useLocation();

    useEffect(() => {
        if(location.hash === "#aboutUs") {
            const id = location.hash.substring(1); // Remove the '#' from the hash
            const element = document.getElementById(id);
            if(element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location])

    return (
        <div id="aboutUs">
            <h1
                className="text-5xl font-semibold text-center mt-10 mb-10 text-gray-800"
            >
                About Us:
            </h1>

            <div className="flex items-start justify-center gap-10 overflow-x-auto px-4 ml-4">
                <div className="flex-shrink-0 w-[300px]">
                    <Card
                    image={ourVision}
                    title="Our Vision"
                    description="Our vision at Urbanex Space is to become the go-to destination for anyone looking to enhance their home with stylish and affordable. We aim to achieve this by continuing to offer a wide selection of high-quality products and exceptional customer service."
                    />
                </div>
                <div className="flex-shrink-0 w-[300px]">
                    <Card
                    image={ourMission}
                    title="Our Mission"
                    description="We understand that your time is valuable, so we always try to make our customers happy with our work. We also value our workers time and make sure they have the resources they need to complete their tasks efficiently."
                    />
                </div>
                <div className="flex-shrink-0 w-[300px]">
                    <Card
                    image={ourValues}
                    title="Our Values"
                    description="At Urbanex Space, we believe in providing our customers with the best possible service experience. Our values include integrity, quality, creativity, and innovation, which guide us in everything we do. Contact us to discuss your project!"
                    />
                </div>
            </div>
        </div>
    )
}