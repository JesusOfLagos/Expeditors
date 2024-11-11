import { Footer } from "@/components/Footer";
import { Nav } from "../nav";
import SchedulePage from "./schedule";

export default function Book() {
    return (
        <div className="bg-white">
            <div>
                <Nav />
            </div>
        <SchedulePage />
        <Footer />
        </div>
    );
    }