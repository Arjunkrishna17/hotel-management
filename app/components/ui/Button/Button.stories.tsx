import type { Meta, StoryObj } from "@storybook/react";
import { FaArrowDown, FaPlus } from "react-icons/fa";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    disabled: false,
    loading: false,
    icon: null,
    iconPosition: "left",
    fullWidth: false,
    className: "",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    fullWidth: {
      control: "boolean",
    },
    className: {
      control: "text",
    },
    icon: {
      options: ["none", "plus", "arrow"],
      mapping: {
        none: null,
        plus: <FaPlus />,
        arrow: <FaArrowDown />,
      },
      control: {
        type: "select",
        labels: {
          none: "None",
          plus: "Plus Icon",
          arrow: "Arrow Icon",
        },
      },
    },
    iconPosition: {
      control: "radio",
      options: ["left", "right"],
    },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  args: {
    icon: "arrow",
    iconPosition: "right",
  },
  render: (args) => (
    <div className="flex gap-4 flex-wrap">
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="danger">
        Danger
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex gap-4 items-center">
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading...",
  },
};

export const WithIcon: Story = {
  args: {
    icon: "plus",
    children: "Add Item",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width Button",
  },
};
