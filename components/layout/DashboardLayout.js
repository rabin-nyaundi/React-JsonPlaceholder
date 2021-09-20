import Head from "next/head";
import {useState} from 'react';
import DashboardSidebar from './DashboardSidebar';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { experimentalStyled } from '@mui/material';

import { Grid } from '@mui/material';
import DashboardNavbar from './DashboardNavbar';

const DashboardLayoutRoot = experimentalStyled('div')(
    ({theme}) => ({
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    })
);

const DashboardLayoutWrapper = experimentalStyled('div')(
    ({theme}) => ({
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        paddingTop: 64,
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 256
        }
    })
);

const DashboardLayoutContainer = experimentalStyled('div')({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
});

const DashboardLayoutContent = experimentalStyled('div')({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
    ['@media (min-width:780px)']: { 
      width: '100%'
    }
});

const DashboardLayout = (props) => {
    const [isMobileNavOpen, setMobileNavOpen] = useState(false);

    return (
        <DashboardLayoutRoot>
            <Head>
                <title>{props.title}</title>
            </Head>
            <ToastContainer
                position="bottom-right"
                autoClose={6000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)}/>

           <DashboardSidebar
                onMobileClose={() => setMobileNavOpen(false)}
                openMobile={isMobileNavOpen}
            />
            <DashboardLayoutWrapper>
                <DashboardLayoutContainer>
                    <DashboardLayoutContent>
                        <Grid xs={12}>
                            {props.children}
                        </Grid>
                    </DashboardLayoutContent>
                </DashboardLayoutContainer>
            </DashboardLayoutWrapper>
        </DashboardLayoutRoot>
    );
};

export default DashboardLayout;
