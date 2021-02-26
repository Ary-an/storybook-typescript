import { FC } from "react";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { FormStyles } from "./Form.style";
import FormInput from "./Input";
import FormButton from "./Button";

import { LoginFormProps } from "../../store/types";

const LoginForm: FC<LoginFormProps> = ({
  onChange,
  onSubmit,
  email,
  password,
}) => {
  const classes = FormStyles();

  return (
    <Container component="main" maxWidth="xl">
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <FormInput
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={onChange}
          />

          <FormInput
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={onChange}
          />

          <FormButton
            variant="contained"
            color="primary"
            className={classes.submit}
            size="large"
            fullWidth
            type="submit"
          >
            Sign In
          </FormButton>

          <Grid container justify="space-between">
            <Grid item xs={5}>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item xs={5}>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LoginForm;
