import { Grid, Avatar, Typography, Button, Modal, Backdrop, Fade } from '@mui/material'
import { Box } from '@mui/system';
import { useState } from 'react';
import { modalStyle } from '../assets/css/Styles';
import UserForm from './UserForm';

export default function Users(props) {


    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Grid sx={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} p={2} m={1} item sm={3} xs={12} >
                <Avatar sx={{height:80, width: 80}} />
                <Typography variant="body">
                    Name: {props.name}
                </Typography> 
                <br />
                <Typography variant="body">
                    Username: {props.username}
                </Typography> 
                <br />
                <Grid container spacing={2}>
                    <Grid item xs >
                        <Button 
                            onClick={handleOpen}
                            variant="outlined" size="small">
                            Edit
                        </Button>
                    </Grid> 
                    <Grid item xs >
                        <Button 
                            onClick={props.delete}
                            variant="outlined" 
                            size="small"
                        >
                            Delete
                        </Button>
                    </Grid> 
                </Grid>

                <Grid item sm={12} xs={12}>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <Box sx={modalStyle}>
                                <UserForm onClose ={handleClose} user={props.user}/>
                            </Box>
                        </Fade>
            

                    </Modal>
                </Grid>
                
            </Grid>

        </>    
    )
}
