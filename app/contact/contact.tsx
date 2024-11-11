import { Footer } from "@/components/Footer";
import { ContactHero } from "./contacthero";
import { Nav } from "../nav";
import BookingPage from "../booking/services";

export const ContactPageHome: React.FC = () => {
    return (
        <div className="bg-white">
            <div className="mx-4 mt-6 mb-3">
            <Nav />
            </div>
            <ContactHero />
            <BookingPage />
            <Footer />
        </div>
    );
}
