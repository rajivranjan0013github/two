import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        zIndex={"overlay"}
        position={"fixed"}
        top={"4"}
        left={"4"}
        colorScheme="purple"
        p={"0"}
        width={"10"}
        h={"10"}
        borderRadius="full"
        onClick={onOpen}
      >
        <BiMenuAltLeft size={"20"} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack>
              <Button
                onClick={onClose}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                <Link to={"/"}>Home</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                <Link to={"/videos"}>Videos</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                <Link to={"/videos?category=free"}>FreeVideos</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={"ghost"}
                colorScheme={"purple"}
              >
                <Link to={"/upload"}>Upload Video</Link>
              </Button>
            </VStack>

            <HStack
              pos={"absolute"}
              bottom={"10"}
              left={"0"}
              justifyContent={"space-evenly"}
              w={"full"}
            >
              <Button onClick={onClose} colorScheme={"purple"}>
                <Link to={"/login"}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                variant={"outline"}
                colorScheme={"purple"}
              >
                <Link to={"/signup"}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
