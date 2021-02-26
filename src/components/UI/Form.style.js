import { makeStyles } from "@material-ui/core";

export const FormStyles = makeStyles((theme) => ({
  paper: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    maxWidth: "600px",
    backgroundColor: "#fff",
    padding: theme.spacing(6),
    boxShadow: "0px 0px 15px 2px #ccc",
    boxSizing: "border-box",
    "&>h1": {
      textAlign: "center",
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      boxShadow: "none",
      padding: theme.spacing(1),
    },
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
