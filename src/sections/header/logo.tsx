import React from "react";
import { As, Box, ChakraProps, OmitCommonProps, Text } from "@chakra-ui/react";
import { GiWeightLiftingUp } from "react-icons/gi";

export default function Logo(
  props: JSX.IntrinsicAttributes &
    OmitCommonProps<
      React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
      >,
      keyof ChakraProps
    > &
    ChakraProps &
    OmitCommonProps<any, keyof ChakraProps> & { as?: As<any> | undefined }
) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold" color="teal">
        fullstackpathways
      </Text>
    </Box>
  );
}
