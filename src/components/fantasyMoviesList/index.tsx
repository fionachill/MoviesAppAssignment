import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { excerpt } from "../../util";

import { FantasyMovieListProps } from "../../types/interfaces";
// import SampleFantasyMovie from  "../../sampleFantasyMovie.tsx";

const styles = {
    table: {
        minWidth: 550,
    },
};


// let fantasymovies = [ SampleFantasyMovie, SampleFantasyMovie, SampleFantasyMovie, SampleFantasyMovie]

const FantasyMoviesList: React.FC<FantasyMovieListProps> = (fantasymovies) => {


 return (
    <TableContainer component={Paper}>
        <Table sx={styles.table} aria-label="fantasy movie table">
            <TableHead>
                <TableRow>
                    <TableCell>Author</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Overview</TableCell>
                    <TableCell>More</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {fantasymovies.map((fm) => (
                    <TableRow key={fm.id}>
                        <TableCell component="th" scope="row">
                            {fm.author}
                        </TableCell>
                        <TableCell>
                            {fm.title}
                        </TableCell>
                        <TableCell>
                            {excerpt(fm.overview)}
                        </TableCell>
                        <TableCell>
                            <Link
                                to={`/fantasymovies/${fm.id}`}
                                state={{
                                    fantasyMovie: fm,
                                }}
                            >
                                Full Movie
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
 );   
};

export default FantasyMoviesList;