import { Nav } from "../nav";
import { AboutPage } from "./about";

export default function About() {
    return (
        <div className="bg-white">
            <div className="mt-6 -mb-6 mx-6">
                <Nav />
            </div>
            <AboutPage />
        </div>
    );
}