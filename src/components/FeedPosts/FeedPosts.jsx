import {
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
  Box,
  Text,
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import useGetFeedPosts from "../../hooks/useGetFeedPosts";

const FeedPosts = () => {
  const { isLoading, posts } = useGetFeedPosts();
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, index) => (
          <VStack key={index} gap={4} mb={10} alignItems={"flex-start"}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} w={"90px"} />
                <Skeleton height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box height={"400px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading &&
        posts.length > 0 &&
        posts.map((post) => <FeedPost key={post.id} post={post} />)}
      {!isLoading && posts.length === 0 && (
        <>
          <Text fontSize={"lg"} color={"whiteAlpha.600"}>
            Hey welcome to the insta clone 😊 !!
          </Text>
          <Text fontSize={"md"} color={"blue.600"}>
            {" "}
            Make some friends Looks like you have none 👀{" "}
          </Text>
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
