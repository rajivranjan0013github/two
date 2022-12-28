import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwicher = (props) => {
  const { toggleColorMode } = useColorMode();
  //   const text = useColorModeValue("dark", "light");
  const SwichIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
    zIndex={"overlay"}
      variant="ghost"
      color="current"
      pos={"fixed"}
      top={"4"}
      right={"4"}
      onClick={toggleColorMode}
      icon={<SwichIcon />}
      {...props}
    />
  );
};

export default ColorModeSwicher;
