import { Typography,Grid} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';


const Summary = () => {
    const theme = useTheme();
    return (
        <Grid container>
          <Typography variant="h1">Summary</Typography>
        </Grid>
    );
};

export default Summary;