import { courses } from "../src/sections/courses/coursesData";
import LandingLayout from "../src/layouts/LandingLayout";
import { CourseGrid } from "../src/sections/courses/courseGrid";
import { CourseCard } from "../src/sections/courses/courseCard";

const IndexPage = () => (
  <LandingLayout>
    <CourseGrid>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </CourseGrid>
  </LandingLayout>
);
export default IndexPage;
