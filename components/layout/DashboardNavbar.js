import Link from "next/link"
import PropTypes from 'prop-types';
import {AppBar, Box, IconButton, Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DashboardNavbar = ({onMobileNavOpen, ...rest}) => {

    return (
        <AppBar
            elevation={0}
            {...rest}
        >
            <Toolbar sx={{ height: 64 , backgroundColor: '#181645'}}>
                <Link href="/">
                    JSONPlaceholder
                </Link> 
                <Box sx={{flexGrow: 1}}/>
                <IconButton
                    color="inherit"
                    onClick={onMobileNavOpen}
                >
                    <MenuIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

DashboardNavbar.propTypes = {
    onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
