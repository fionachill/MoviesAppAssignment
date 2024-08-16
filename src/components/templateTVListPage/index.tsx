import React from "react";
import TVHeader from "../headerTvList";
import Grid from "@mui/material/Grid";
import TvList from "../tvShowList";
import { TVListPageTemplateProps } from "../../types/interfaces";


const styles = {
    root: {
        pbackgrounfColor: "bfbfbf",
    }
};

const TVListPageTemplate: React.FC <TVListPageTemplateProps> = ({ tvshows, name, action}) =>{ 
    return (
            <Grid container sx={styles.root}>
                <Grid item xs={12}>
                    <TVHeader name={name} />
                </Grid>
                <Grid item container spacing={5}>
                    <TvList
                        action={action}
                        tvshows={tvshows}
                    ></TvList>
                </Grid>
            </Grid>
    );
}

export default TVListPageTemplate