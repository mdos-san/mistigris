import { Box, Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function SignIn() {
  return <Grid container height="100%">
    <Grid component={Paper} xs={12} sm={8} md={4} item container>
      <Box sx={{ display: "flex", width: "100%", margin: "100px 80px" }}>
        <Grid container justifyContent="space-between" direction="column" height="100%">
          <Grid item>
            <Typography component="h1" variant="h4">Mistigris</Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" fullWidth>Connexion avec Google</Button>
          </Grid>
          <Grid item>
            <Typography variant="caption">Tous droits réservés</Typography>
          </Grid>
        </Grid>
      </Box>
    </Grid>
    <Grid className="signin-background" xs={0} sm={4} md={8} item></Grid>
  </Grid>
}

export default SignIn;
