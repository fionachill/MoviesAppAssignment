import type { Meta, StoryObj } from "@storybook/react";
import TvDetails from "../components/tvDetails"; 
import SampleTvShow from "./sampleTvData";

const meta = {
    title: "TV Show Details Page/TVDetails",
    component: TvDetails,
} satisfies Meta<typeof TvDetails>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
    args: SampleTvShow
};
Basic.storyName = "Default";