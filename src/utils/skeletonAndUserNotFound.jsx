import {
  Flex,
  Text,
  Link,
  VStack,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const UserNotFound = () => {
  return (
    <Flex flexDir={"column"} mx={"auto"} textAlign={"center"}>
      <Text size={"2xl"}>user not found</Text>
      <Link
        w={"max-content"}
        color={"blue.500"}
        as={RouterLink}
        to={"/"}
        mx={"auto"}
      >
        Go to Home
      </Link>
    </Flex>
  );
};

export const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SkeletonCircle size={24} />
      <VStack
        alignItems={{ base: "center", sm: "flex-start" }}
        gap={2}
        mx={"auto"}
        flex={1}
      >
        <Skeleton height={"12px"} width={"150px"} />
        <Skeleton height={"12px"} width={"100px"} />
      </VStack>
    </Flex>
  );
};
