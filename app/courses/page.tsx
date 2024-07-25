import { Nav } from "../nav";
import { Course } from "./courses";
import { PartialCourse } from "./t";

export default function Courses() {
    return (
        <div>
            <div className="mt-6 -mb-6 mx-6">
                <Nav />
            </div>
            <Course />
            {/* <PartialCourse /> */}
        </div>
    );
}