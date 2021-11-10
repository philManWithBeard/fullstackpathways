import { courses } from "../src/coursesData";
import { Container } from "@chakra-ui/react";
import { CourseGrid } from "../src/sections/courseGrid";
import { CourseCard } from "../src/sections/courseCard";

const IndexPage = () => (
  <Container maxW="container.xl">
    <CourseGrid>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </CourseGrid>
  </Container>
);
export default IndexPage;
