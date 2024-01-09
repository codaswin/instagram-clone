import { Box, Flex, Text } from "@chakra-ui/react";
import { BsGrid3X3, BsBookmark, BsSuitHeart } from "react-icons/bs";

const ProfileTabs = () => {
  return (
    <Flex
      fontWeight={"bold"}
      textTransform={"uppercase"}
      w={"full"}
      justifyContent={"center"}
      gap={{ base: 4, sm: 10 }}
    >
      <Flex
        borderTop={"1px solid white"}
        cursor={"pointer"}
        alignItems={"center"}
        p="3"
        gap={1}
      >
        <Box fontSize={20}>
          <BsGrid3X3 />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Posts
        </Text>
      </Flex>
      <Flex cursor={"pointer"} alignItems={"center"} p={3} gap={1}>
        <Box fontSize={20}>
          <BsBookmark />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Saved
        </Text>
      </Flex>
      <Flex cursor={"pointer"} alignItems={"center"} p={3} gap={1}>
        <Box fontSize={20}>
          <BsSuitHeart fontWeight={"bold"} />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>
          Likes
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProfileTabs;
