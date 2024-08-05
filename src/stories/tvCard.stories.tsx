import type { Meta, StoryObj } from "@storybook/react";
import TvCard from "../components/tvCard";
import SampleTvShow from "./sampleTvData";

const meta = {
    title: "Tv Page/TvCard",
    component: TvCard,
} satisfies Meta<typeof TvCard>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
    args: SampleTvShow

};

Basic.storyName = "Default";

const sampleNoTvPoster = { ...SampleTvShow, poster_path: undefined };
export const Exceptional: Story = {
    args: sampleNoTvPoster

};

Exceptional.storyName = "Exception";