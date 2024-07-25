import { Footer } from "@/components/Footer";
import { ContactHero } from "./contacthero";
import { Nav } from "../nav";

export const ContactPageHome: React.FC = () => {
    return (
        <div>
            <div className="mx-4 mt-6 mb-3">
            <Nav />
            </div>
            <ContactHero />
            <Footer />
        </div>
    );
}
