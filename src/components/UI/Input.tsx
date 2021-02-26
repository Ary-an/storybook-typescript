import { FC } from "react";
import TextField, {
  StandardTextFieldProps,
  FilledTextFieldProps,
  OutlinedTextFieldProps,
} from "@material-ui/core/TextField";

export type InputProps =
  | StandardTextFieldProps
  | FilledTextFieldProps
  | OutlinedTextFieldProps;

const FormInput: FC<InputProps> = (props) => {
  return <TextField {...props}>{props.children}</TextField>;
};

export default FormInput;
