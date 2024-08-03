import type { Meta, StoryObj } from "@storybook/react";
import FilterTvShowsCard from "../components/filterTvShowsCard";   

const meta = {
    title: "Tv Page/FilterTvShowsCard",
    component: FilterTvShowsCard,
} satisfies Meta<typeof FilterTvShowsCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
};
Basic.storyName = "Default";