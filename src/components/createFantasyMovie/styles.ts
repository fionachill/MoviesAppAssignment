const styles =  {
    root: {
      marginTop: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
    },
    form: {
      width: "100%",
      "& > * ": {
        marginTop: 2,
      },
    },
    formControl: {
        margin: 1,
        minWidth: 220,
        backgroundColor: "rgb(255, 255, 255)",
    },
    textField: {
      width: "40ch",
    },
    submit: {
      marginRight: 2,
    },
    snack: {
      width: "50%",
      "& > * ": {
        width: "100%",
      },
    },
  };
  export default styles