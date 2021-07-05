import { Grid, Paper, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { getMatches } from '../../src/matches'
import { getSummonerData } from '../../src/summoner_data'

export async function getStaticProps() {
  const summonerData = await getSummonerData()
  const matchesData = await getMatches()
  return {
    props: {
      summonerData,
      matchesData,
    },
  }
}

const Summary = ({ summonerData, matchesData }) => {
  const theme = useTheme()
  return (
    <Grid container style={{ flexDirection: 'column' }}>
      <Grid item>
        <Typography variant="h2" gutterBottom>
          Summary
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          Summoner: {summonerData.gameName}
        </Typography>
      </Grid>
      <Grid item>
        <Paper>
          <Typography varaint="h3">Matches</Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Summary
