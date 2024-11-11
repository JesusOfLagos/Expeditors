import { Nav } from "../nav";
import { Course } from "./courses";

export default function Courses() {
    return (
        <div className="bg-white">
            <div className="mt-6 -mb-6 mx-6">
                <Nav />
            </div>
            <Course />
        </div>
    );
}