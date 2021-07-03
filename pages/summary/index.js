import { Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { getSummonerData } from "../../src/summoner_data";

export async function getStaticProps() {
  const summonerData = await getSummonerData();
  return {
    props: {
      summonerData,
    },
  };
}

const Summary = ({ summonerData }) => {
  const theme = useTheme();
  return (
    <Grid container style={{flexDirection: "column"}}>
      <Grid item>
        <Typography variant="h2" gutterBottom>Summary</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">Summoner: {summonerData.gameName}</Typography>
      </Grid>      
    </Grid>
  );
};

export default Summary;
