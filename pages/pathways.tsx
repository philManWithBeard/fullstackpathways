import { courses } from "../src/sections/courses/coursesData";
import { Container } from "@chakra-ui/react";
import { CourseGrid } from "../src/sections/courses/courseGrid";
import { CourseCard } from "../src/sections/courses/courseCard";
import NavBar from "../src/sections/header/header";

const IndexPage = () => (
  <Container maxW="container.xl">
    <NavBar />
    <CourseGrid>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </CourseGrid>
  </Container>
);
export default IndexPage;
