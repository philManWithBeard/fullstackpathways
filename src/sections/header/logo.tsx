import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { GiWeightLiftingUp } from "react-icons/gi";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold" color="teal">
        fullstackpathways
      </Text>
    </Box>
  );
}
