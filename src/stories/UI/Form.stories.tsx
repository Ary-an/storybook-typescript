import { Story, Meta } from "@storybook/react";
import LoginForm from "../../components/UI/LoginForm";
import { LoginFormProps } from "../../store/types";

export default {
  title: "UI/LoginForm",
  component: LoginForm,
  argTypes: {
    email: {
      control: {
        type: null,
      },
    },
    password: {
      control: {
        type: null,
      },
    },
  },
} as Meta;

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />;

export const loginForm = Template.bind({});

loginForm.args = {
  onSubmit: (e) => {
    e.preventDefault();
    alert("form submitted");
  },
};
