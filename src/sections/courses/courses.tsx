import { VStack, Heading, Text } from "@chakra-ui/react";
import { CourseCard } from "./courseCard";

const Courses = (props: { coursesData: any[] }) => (
  <VStack
    w="full"
    h="full"
    p={10}
    spacing={10}
    alignItems="flex-start"
    bg="gray.50">
    <div>
      {props.coursesData.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  </VStack>
);
export default Courses;
