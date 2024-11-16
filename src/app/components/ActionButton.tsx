import { Button, ButtonProps } from "@chakra-ui/react";

interface ActionButtonProps extends ButtonProps {}

const ActionButton = (props: ActionButtonProps) => {
  return (
    <Button
      size="lg"
      bg="brand.main.default"
      color="whiteAlpha.900"
      _hover={{
        bg: "brand.main.500",
      }}
      {...props}
    />
  );
};

export default ActionButton;
