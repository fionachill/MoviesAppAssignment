import React, { useState, ChangeEvent, useContext} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller, SubmitHandler} from "react-hook-form";
import styles from "./styles";
import genres from "./genreList";
import { FantasyMovieProps } from "../../types/interfaces";
import { FantasyMoviesContext } from "../../contexts/fantasyMoviesContext";
import  { useId }  from "react"; 
// import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput"; this didn't play nicely with the useContext hook so I had to take it out. 
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const CreateFantasyMovieForm: React.FC = () => {
    const [open, setOpen] = useState(false);

    const defaultValues ={
        defaultValues: {
            author: "",
            id: "",
            title: "",
            overview: "",
            release_date: "",
            runtime: 0,
            production_company: "",
            genre_ids: 0,
        }
    };

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<FantasyMovieProps>(defaultValues);

    const navigate = useNavigate();
    const context = useContext(FantasyMoviesContext);
    const [genre, setGenre] = useState(12);

    const handleGenreChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGenre(Number(event.target.value));
    }

    const handleSnackClose = () => {
        setOpen(false);
        navigate("/fantasymovies");
    };

    const fantasyMovieId = useId();

    const onSubmit: SubmitHandler<FantasyMovieProps> = (fantasymovie) => {
        fantasymovie.id = fantasyMovieId;
        fantasymovie.genre_ids = genre;
        // console.log(fantasymovie);
        context.addFantasyMovie(fantasymovie);
        setOpen(true);
    }

    return (
        <Box component="div" sx={styles.root}>
            <Typography component="h2" variant="h3">
                Create your own fantasy movie. 
            </Typography>
            <Snackbar
                sx={styles.snack}
                anchorOrigin={{ vertical: "top", horizontal: "right"}}
                open={open}
                onClose={handleSnackClose}
            >
                <Alert
                    severity="success"
                    variant="filled"
                    onClose={handleSnackClose}
                >
                    <Typography variant="h6">
                        Fantasy Movie added successfully
                    </Typography>
                </Alert>
            </Snackbar>
            <form style={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                <Controller
                    name="author"
                    control={control}
                    rules={{ required: "Author name is required"}}
                    defaultValue=""
                    render={({ field: {onChange, value}}) => (
                        <TextField
                            sx={{width: "40ch" }}
                            variant="outlined"
                            margin="normal"
                            required
                            onChange={onChange}
                            value={value}
                            id="author"
                            label="Author name"
                            autoFocus
                        />
                    )}
                />
                {errors.author && (
                    <Typography variant="h6" component="p">
                        {errors.author.message}
                    </Typography>   
                )}
                <Controller
                    name="title"
                    control={control}
                    rules={{ required: "Movie Title is required"}}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            sx={{ width: "40ch" }} 
                            variant="outlined"
                            margin="normal"
                            required
                            onChange={onChange}
                            value={value}
                            id="title"
                            label="Movie Title"
                            autoFocus
                        />
                    )}
                />
                {errors.title && (
                    <Typography variant="h6" component="p">
                        {errors.title.message}
                    </Typography>
                )}
                <Controller
                    name="overview"
                    control={control}
                    rules={{
                        required: "Movie Overview is required",
                        minLength: { value: 10, message: "Movie Overview is too short"},
                    }}
                    defaultValue=""
                    render={({ field: { onChange, value } }) => (
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={value}
                            onChange={onChange}
                            label="Movie Overview"
                            id="overview"
                            multiline
                            minRows={10}
                        />
                    )}
                />
                {errors.overview && (
                    <Typography variant="h6" component="p">
                        {errors.overview.message}
                    </Typography>
                )}
                <Controller
                    control={control}
                    name="release_date"
                    rules={{ required: "Release Date is required"}}
                    defaultValue=""
                    render={({ field: { onChange, value} }) => (
                        <TextField
                            sx={{ width: "40ch"}}
                            variant="outlined"
                            margin="normal"
                            required
                            onChange={onChange}
                            value={value}
                            id="release_date"
                            label="Release Date"
                            autoFocus
                        />
                    )}
                />
                {errors.release_date && (
                    <Typography variant="h6" component="p">
                        {errors.release_date.message}
                    </Typography>
                )}  
                <Controller 
                    name="runtime"
                    control={control}
                    rules={{required: "Please enter runtime in minutes"}}
                    render={({ field: { onChange, value }}) => (
                        <TextField
                        sx={{ width: "40ch"}}
                            variant="outlined"
                            margin="normal"
                            required
                            onChange={onChange}
                            value={value}
                            id="runtime"
                            label="Runtime"
                        />
                    )}
                    />
                    {errors.runtime && (
                        <Typography variant="h6" component="p">
                            {errors.runtime.message}
                        </Typography>   
                    )}
                <Controller 
                    name="production_companies"
                    control={control}
                    rules={{ required: "Please enter a production company"}}
                    render={({field : { onChange, value}}) => (
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            onChange={onChange}
                            value={value}
                            id="production_company"
                            label="Production Company"
                        />
                    )}
                />
                {errors.production_companies && (
                    <Typography variant="h6" component="p">
                        {errors.production_companies.message}
                    </Typography>   
                )}
                 <Controller 
                    control={control}
                    name="genre_ids"
                    render={({ field }) => (
                        <TextField
                            {...field}
                            id="select-genre"
                            select
                            variant="outlined"
                            label="Select Genre"
                            value={genre}
                            onChange={handleGenreChange}
                            helperText="Please select a genre"
                            >
                                {genres.map((option) => (
                                    <MenuItem key={option.id} value={option.id}>
                                        {option.name}
                                    </MenuItem>
                                ))}
                        </TextField>
                    )}
                />
                <Box >
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={styles.submit}
                    >
                        Submit
                    </Button>
                    <Button
                        type="reset"
                        variant="contained"
                        color="secondary"
                        sx={styles.submit}
                        onClick={() => {
                            reset({
                                title: "",
                                overview: "",
                                release_date: "",
                                runtime: 0,
                                production_companies: [""],
                                genre_ids: 0,
                            });
                        }}
                    >
                        Reset
                    </Button>                    
                </Box>
            </form>
        </Box>
    );
};

export default CreateFantasyMovieForm;