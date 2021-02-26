import FormButton from "../../components/UI/Button";

import { Story, Meta } from "@storybook/react";
import { ButtonProps } from "@material-ui/core/Button";

export default {
  title: "UI/Button",
  components: FormButton,
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    color: {
      control: { type: "select", options: ["primary", "secondary"] },
    },
    variant: {
      control: { type: "select", options: ["contained", "outlined", "text"] },
    },
    onClick: {
      action: "clicked",
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <FormButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  children: "Button",
  variant: "contained",
  color: "primary",
};
