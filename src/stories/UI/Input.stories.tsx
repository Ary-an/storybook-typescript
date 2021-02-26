import { Story, Meta } from "@storybook/react";
import FormInput, { InputProps } from "../../components/UI/Input";

export default {
  title: "UI/Input",
  component: FormInput,
  args: {
    variant: "filled",
    label: "Input field",
  },
  argTypes: {
    variant: {
      control: { type: "select", options: ["filled", "outlined", "standard"] },
    },
    required: {
      control: { type: "boolean", options: [true, false] },
    },
    type: {
      control: {
        type: "select",
        options: ["text", "number", "tel", "password"],
      },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <FormInput {...args} />;

export const Input = Template.bind({});
