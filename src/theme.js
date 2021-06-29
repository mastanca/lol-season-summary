import { createMuiTheme } from '@material-ui/core/styles';
import { palette } from '@material-ui/system';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        type: "dark",
        ...palette
    }
});

export default theme;