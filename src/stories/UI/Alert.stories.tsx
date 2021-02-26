import { AlertProps } from "@material-ui/lab/Alert";
import AlertMessage from "../../components/UI/Alert";
import { Story, Meta } from "@storybook/react";

export default {
  title: "UI/Alert",
  component: AlertMessage,
  argTypes: {
    severity: {
      control: {
        type: "select",
        options: ["error", "warning", "info", "success"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["standard", "outlined", "filled"],
      },
    },
  },
} as Meta;

const Template: Story<AlertProps> = (args) => (
  <AlertMessage {...args}>This is alert Message — check it out!</AlertMessage>
);

export const Alert = Template.bind({});

Template.args = {
  severity: "info",
  variant: "outlined",
};
