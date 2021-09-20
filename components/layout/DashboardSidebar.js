import {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import {Box, Divider, Drawer, List, Typography} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import PostAddIcon from '@mui/icons-material/PostAdd';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';


const items = [
    {
        href: '/',
        icon: DashboardIcon,
        title: 'Dashboard'
    },

    {
        href: '/users',
        icon: PeopleIcon,
        title: 'Users'
    },
    {
        href: '/posts',
        icon: PostAddIcon,
        title: 'Posts'
    },
    {
        href: '/albums',
        icon: PhotoAlbumIcon,
        title: 'Album'
    },
    {
        href: '/todos',
        icon: PhotoAlbumIcon,
        title: 'Todos'
    },

];

const DashboardSidebar = ({onMobileClose, openMobile}) => {
    const location = useRouter();

    const user = {
        avatar: Avatar,
        name: 'Weza App',
        username: 'JsonPlaceHolder'
    };


    useEffect(() => {


        if (openMobile && onMobileClose) {
            onMobileClose();
        }
    }, [location.pathname]);

    const content = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2
                }}
            >
                <Avatar />

                <Typography
                    color="textPrimary"
                    variant="h6"
                >
                    {user.name}
                </Typography>
                <Typography
                    color="textSecondary"
                    variant="body2"
                >
                    {user.username}
                </Typography>
            </Box>
            <Divider/>
            <Box sx={{p: 2}}>

                <List>

                    {items.map((item) => (
                        <NavItem
                            href={item.href}
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                        />
                    ))}
                </List>


            </Box>
            <Box sx={{flexGrow: 1}}/>
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    m: 2,
                    p: 2
                }}
            >

            </Box>
        </Box>
    );

    return (
        <>
            <Drawer
                anchor="left"
                onClose={onMobileClose}
                open={openMobile}
                variant="temporary"
                PaperProps={{
                    sx: {
                        width: 256
                    }
                }}
            >
                {content}
            </Drawer>

            <Drawer
                anchor="left"
                open
                variant="persistent"
                PaperProps={{
                    sx: {
                        width: 256,
                        top: 64,
                        height: 'calc(100% - 64px)',
                        ['@media (max-width:780px)']: { 
                            width: 0
                        }
                    }
                }}
            >
                {content}
            </Drawer>
            {/*</Hidden>*/}
        </>
    );
};

DashboardSidebar.propTypes = {
    onMobileClose: PropTypes.func,
    openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
    onMobileClose: () => {
    },
    openMobile: false
};

export default DashboardSidebar;
