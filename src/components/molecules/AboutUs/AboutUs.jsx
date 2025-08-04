import { Card } from "../../atoms/Card/Card";
import ourVision from "../../../assets/aboutUs/ourVision.png";
import ourMission from "../../../assets/aboutUs/ourMission.png";
import ourValues from "../../../assets/aboutUs/ourValue.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#aboutUs") {
      const id = location.hash.substring(1); // Remove the '#' from the hash
      const element = document.getElementById(id);
      if (element) {
        const top = element.offsetTop - 125; // Adjust for navbar height
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div id="aboutUs">
      <h1 className="text-4xl sm:text-5xl font-semibold text-center mt-10 mb-10 text-gray-800">
        About
      </h1>

      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-8 sm:gap-10 overflow-x-auto px-4 py-4">
        <div className="flex-shrink-0 w-full sm:w-[300px]">
          <Card
            image={ourVision}
            title="Our Vision"
            description="Our vision at Urbanex Space is to be the trusted destination for stylish, high-quality, and affordable interior solutions. We aim to create meaningful spaces that inspire, uplift, and reflect every client’s unique personality."
          />
        </div>
        <div className="flex-shrink-0 w-full sm:w-[300px]">
          <Card
            image={ourMission}
            title="Our Mission"
            description="We’re committed to delivering personalized interior solutions that blend modern aesthetics with timeless appeal. Through thoughtful design and attention to detail, we transform spaces into experiences."
          />
        </div>
        <div className="flex-shrink-0 w-full sm:w-[300px]">
          <Card
            image={ourValues}
            title="Our Values"
            description="We value design with integrity blending craftsmanship, collaboration, and conscious choices. Every detail matters, and every space we create is a reflection of our commitment to excellence."
          />
        </div>
      </div>
    </div>
  );
};
