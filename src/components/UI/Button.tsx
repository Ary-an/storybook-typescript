import { FC } from "react";
import Button, { ButtonProps } from "@material-ui/core/Button";

const FormButton: FC<ButtonProps> = (props) => {
  return <Button {...props}>{props.children}</Button>;
};

export default FormButton;
