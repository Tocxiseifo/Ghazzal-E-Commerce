import CoreSystemSection from "../Components/Core Sysytem Section/CoreSystemSection";
import FooterSection from "../Components/Footer Section/FooterSection";
import HeroSection from "../Components/Hero Section/HeroSection";
import NewArrival from "../Components/New Arrivals/NewArrivals";

export default function HomePage() {
    return(
        <>
            <HeroSection />
            <NewArrival />
            <CoreSystemSection />
            <FooterSection />
        </>
    )
}