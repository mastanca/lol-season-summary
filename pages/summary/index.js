import { Grid, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

export async function getStaticProps() {
  const summoderData = getSummonerData();
  return {
    props: {
      summonderData,
    },
  };
}

const Summary = ({ summonerData }) => {
  const theme = useTheme();
  return (
    <Grid container>
      <Typography variant="h1">Summary</Typography>
    </Grid>
  );
};

export default Summary;
