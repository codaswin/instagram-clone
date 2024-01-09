import { Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore as fireStore } from "../../firebase/firebase";
import useShowTost from "../../hooks/useShowToast";
import useAuthstore from "../../store/authStore";
import { doc, getDoc, setDoc } from "firebase/firestore";
const GoogleAuth = ({ prefix }) => {
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);
  const showToast = useShowTost();
  const loginUser = useAuthstore((state) => state.login);

  const handleGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle();
      if (!newUser && error) {
        showToast("Error", error.message, "error");
      }

      const userRef = doc(fireStore, "users", newUser.user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userDoc = userSnap.data();
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc)
      } else {
        // signup
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          username: newUser.user.email.split("@")[0],
          fullName: newUser.user.displayName,
          bio: "",
          profilePicURL: newUser.user.photoURL,
          followers: [],
          following: [],
          post: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(fireStore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      }
    } catch (error) {
      showToast("Error", error, "error");
    }
  };
  return (
    <>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        cursor={"pointer"}
        onClick={handleGoogleAuth}
      >
        <Image src="google.png" w={5} alt="Google logo" />
        <Text color={"blue.500"} mx={2}>
          {prefix} in with Google
        </Text>
      </Flex>
    </>
  );
};

export default GoogleAuth;
