import { Footer } from "../footer";
import { Nav } from "../nav";
import ThankYouPage from "./thank";

export default function ThankYou () {
    return (
        <div className="bg-white">
            <Nav />
            <ThankYouPage />
            <Footer />
        </div>
    )
}