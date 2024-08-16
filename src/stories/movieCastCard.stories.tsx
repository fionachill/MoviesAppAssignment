import type { Meta, StoryObj } from "@storybook/react";
import MovieCastCard from "../components/movieCastCard";
import SampleMovie from "./sampleData";

const meta = {
    title: "Movie Cast Card",
    component: MovieCastCard,
} satisfies Meta<typeof MovieCastCard>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Basic: Story = {
    args: SampleMovie.cast
};

Basic.storyName = "Default";

const sampleNoPoster = {...SampleMovie, profile_path: undefined};
export const Exceptional: Story = {
    args: sampleNoPoster

};

Exceptional.storyName = "Exception";