import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import useSingUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

const Singup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, signup } = useSingUpWithEmailAndPassword();
  return (
    <>
      <Input
        size={"sm"}
        type="email"
        placeholder="Email"
        fontSize={14}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        size={"sm"}
        type="text"
        placeholder="User name"
        fontSize={14}
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <Input
        size={"sm"}
        type="text"
        placeholder="Full name"
        fontSize={14}
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />
      <InputGroup>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          fontSize={14}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          size={"sm"}
        />

        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {error && (
        <Alert borderRadius={4} fontSize={13} p={2} status="error">
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      <Button
        colorScheme="blue"
        fontSize={14}
        size={"sm"}
        w={"full"}
        isLoading={loading}
        onClick={() => signup(inputs)}
      >
        Sign up
      </Button>
    </>
  );
};

export default Singup;
