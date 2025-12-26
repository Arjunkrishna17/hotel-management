import { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    type: "text",
    placeholder: "Enter text",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    label: "Input Label",
    helpText: "This is some help text.",
    error: "",
    className: "",
  },

  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email"],
    },
    onChange: { action: "change" },
    placeholder: { control: "text" },
    label: { control: "text" },
    helpText: { control: "text" },
    error: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    type: "text",
    label: "Text Input",
    placeholder: "Enter text",
  },
};

export const EmailInput: Story = {
  args: {
    type: "email",
    label: "Email Address",
    placeholder: "Enter your email",
  },
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    label: "Enter your Password",
  },
};
