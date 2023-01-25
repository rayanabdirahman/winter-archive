import { baseColors } from "@lib/theme/colors";
import { Button as CUButton, ButtonProps } from "@chakra-ui/react";

type Props = ButtonProps & {
  primary?: boolean | undefined;
  secondary?: boolean | undefined;
  tertiary?: boolean | undefined;
};

const Button: React.FC<Props> = ({ children, ...props }) => {
  const bg = props.tertiary
    ? baseColors.brand.brand500
    : props.secondary
    ? baseColors.neutral.gray100
    : baseColors.neutral.black800;

  const statebg = props.tertiary
    ? baseColors.brand.brand400
    : props.secondary
    ? baseColors.neutral.gray200
    : baseColors.neutral.black700;

  const color = props.secondary
    ? baseColors.neutral.black800
    : baseColors.shades.white;

  if (props.disabled) {
    return (
      <CUButton {...props} isDisabled={true}>
        {children}
      </CUButton>
    );
  }

  return (
    <CUButton
      {...props}
      bg={bg}
      color={color}
      _hover={{ bg: statebg }}
      _active={{
        bg: statebg,
      }}
      variant="solid"
      fontSize="14px"
    >
      {children}
    </CUButton>
  );
};

export default Button;
