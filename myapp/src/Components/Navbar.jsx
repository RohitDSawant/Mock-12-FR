import React from "react";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import SignupPage from "../Pages/SignupPage";
import LoginPage from "../Pages/LoginPage";

const Navbar = () => {
  const { isOpen: isSignUpOpen, onOpen:onSignUpOpen, onClose:onSignUpClose } = useDisclosure();
  const { isOpen: isLoginOpen, onOpen:onLoginOpen, onClose:onLoginClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <div>
      <Box className="navbar">
        <Box>
          <Link to={"/"}>
            <Button>Home</Button>
          </Link>
        </Box>
        <Box>
          <Input
            fontSize={"13px"}
            fontWeight="medium"
            placeholder={"Search for Products, Grocery and more"}
            type={"search"}
          />
        </Box>

        <Box ref={finalRef}>
          <Button onClick={onSignUpOpen}>Signup</Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isSignUpOpen}
            onClose={onSignUpClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Text>Create your account</Text>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <SignupPage />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>

        <Box ref={finalRef} >
          <Button onClick={onLoginOpen}>Login</Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isLoginOpen}
            onClose={onLoginClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <Text>Login:</Text>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <LoginPage />
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>

        <Link to={"/cart"}>
          <Button id="cart-btn">
            <TiShoppingCart />
          </Button>
        </Link>

      </Box>
    </div>
  );
};

export default Navbar;
