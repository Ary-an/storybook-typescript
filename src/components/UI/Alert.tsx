import Alert, { AlertProps } from "@material-ui/lab/Alert";
import { FC } from "react";

const AlertMessage: FC<AlertProps> = (props) => {
  return <Alert {...props}>{props.children}</Alert>;
};

export default AlertMessage;
