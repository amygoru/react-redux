import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Button } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const Home = (props) => {
  console.log("dddddddddddd", props.data);
  return (
    
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <div>
          
        <Grid c ontainer spacing={2}>
          <Grid className="mt-5" item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <Img
                alt="complex"
                src="https://play-lh.googleusercontent.com/9KOWwr1dfjDdDmWQMCPbPDtqgFZHqOLURqWtpiJzyALvXSKKpdSCoG6ofjZmmNpP_Wc"
              />
            </ButtonBase>
          </Grid>
          <h1>sdasdasd</h1>
          <span>{props.data}</span>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Standard license
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ID: 1030114
                </Typography>
              </Grid>
              <Grid item>
                {/* <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography> */}
                <Button
                  variant="outlined"
                  onClick={()=> props.addToCartHandler({ price: 400,name:'Standard license' })}
                >
                  Add to Cart
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                $19.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Paper>
  );
};

export default Home;
