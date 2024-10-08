import React, { useState } from "react";
import FilterCard from "../filterTvShowsCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { BaseTvShowProps } from "../../types/interfaces";

// eslint-disable-next-line react-refresh/only-export-components
export const titleFilter = (tvshow: BaseTvShowProps, value: string): boolean => {
    return tvshow.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

// eslint-disable-next-line react-refresh/only-export-components
export const genreFilter = (tvshow: BaseTvShowProps, value: string) => {
    const genreId = Number(value);
    const genreIds = tvshow.genre_ids;
    return genreId > 0 && genreIds ? genreIds.includes(genreId) : true;
};

const styles = {
    root: {
        backgroundColor: "#bfbfbf",
    },
    fab: {
        marginTop: 8,
        position: "fixed",
        top: 20,
        right: 2,
    }
};

interface TVFilterUIProps {
    onFilterValuesChange: (f: string, s: string) => void;
    titleFilter: string;
    genreFilter: string;
}

const TVFilterUI: React.FC<TVFilterUIProps> = ({ onFilterValuesChange, titleFilter, genreFilter}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={styles.fab}
            >
                Filter
            </Fab>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                >
                    <FilterCard
                        onUserInput={onFilterValuesChange}
                        titleFilter={titleFilter}
                        genreFilter={genreFilter}
                    />
            </Drawer>
        </>
    );
};

export default TVFilterUI;