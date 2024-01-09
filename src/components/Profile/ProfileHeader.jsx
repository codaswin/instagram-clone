import {
  Avatar,
  AvatarGroup,
  Flex,
  VStack,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import EditProfile from "./EditProfile";
import useFollowUser from "../../hooks/useFollowUser";

const ProfileHeader = () => {
  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const visitingOwnProfileAndAuth =
    authUser && authUser.username === userProfile.username;
  const visitingOtherProfileAndAuth =
    authUser && authUser.username !== userProfile.username;
  const { isOpen, onOpen, onClose } = useDisclosure(true);

  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(
    authUser?.uid
  );
  return (
    <>
      <Flex
        gap={{ base: 4, sm: 10 }}
        py={10}
        direction={{ base: "column", sm: "row" }}
      >
        <AvatarGroup
          size={{ base: "xl", md: "2xl" }}
          justifySelf={"center"}
          alignSelf={"flex-start"}
          mx={"auto"}
        >
          <Avatar src={userProfile?.profilePicURL} alt="user profile" />
        </AvatarGroup>

        <VStack flex={1} alignItems={"start"} gap={2} mx={"auto"}>
          <Flex
            gap={4}
            direction={{ base: "column", sm: "row" }}
            justifyContent={{ base: "center", sm: "flex-start" }}
            w={"full"}
            alignItems={"center"}
          >
            <Text fontSize={{ base: "sm", md: "lg" }}>
              {userProfile?.username}
            </Text>
            {visitingOwnProfileAndAuth && (
              <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
                <Button
                  bg={"white"}
                  _hover={{ bg: "white.800" }}
                  cursor={"pointer"}
                  color={"black"}
                  size={{ base: "xs", md: "sm" }}
                  onClick={onOpen}
                >
                  Edit profile
                </Button>
              </Flex>
            )}
            {visitingOtherProfileAndAuth && (
              <Flex gap={4} justifyContent={"center"} alignItems={"center"}>
                <Button
                  bg={"blue.500"}
                  _hover={{ bg: "black.600" }}
                  cursor={"pointer"}
                  color={"white"}
                  size={{ base: "xs", md: "sm" }}
                  onClick={handleFollowUser}
                  isLoading={isUpdating}
                >
                  {isFollowing ? "Unfollow" : "Follow"}
                </Button>
              </Flex>
            )}
          </Flex>
          <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
            <Text fontSize={{ base: "xs", md: "sm" }}>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                {userProfile.posts.length}
              </Text>
              Posts
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }}>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                {userProfile.followers.length}
              </Text>
              Followers
            </Text>
            <Text fontSize={{ base: "xs", md: "sm" }}>
              <Text as={"span"} fontWeight={"bold"} mr={1}>
                {userProfile.following.length}
              </Text>
              Following
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={4}>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {userProfile.fullName}
            </Text>
          </Flex>
          <Text fontSize={"sm"}>{userProfile.bio}</Text>
        </VStack>
        {isOpen && <EditProfile onClose={onClose} isOpen={isOpen} />}
      </Flex>
    </>
  );
};

export default ProfileHeader;
