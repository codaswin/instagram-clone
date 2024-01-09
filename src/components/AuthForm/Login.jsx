import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import useLogin from "../../hooks/useLogin";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, login } = useLogin();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  return (
    <>
      <Input
        size={"sm"}
        type="email"
        placeholder="Email"
        fontSize={14}
        value={inputs.email}
        onChange={(e) => setInputs({ email: e.target.value })}
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
        onClick={() => login(inputs)}
        isLoading={loading}
      >
        Log in
      </Button>
    </>
  );
};

export default Login;
