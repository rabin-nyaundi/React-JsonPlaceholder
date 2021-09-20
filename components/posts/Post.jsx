import { Backdrop, Button, Card, Fade, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PostForm from "./PostForm";
import { modalStyle } from "../assets/css/Styles";
import { useState } from "react";

export default function Post(props) {


    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Grid item sm={4}>
                <Card sx={{padding:'1rem'}}>
                    <Typography variant="h6">
                        Title: {props.title}
                    </Typography>
                    <br />
                    <Typography variant="body">
                        {props.body}
                    </Typography>

                    <Grid container spacing={2} p={2}>
                        <Grid item xs={6} p={2}>
                            <Button 
                                onClick={handleOpen}
                                variant="outlined" size="small"
                            >
                                Edit
                            </Button>
                        </Grid> 
                        <Grid item xs={6} p={2}>
                            <Button 
                                onClick={props.delete}
                                variant="outlined" 
                                size="small"
                            >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>

                    {/* Edit Post modal */}

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
                                    <PostForm onClose ={handleClose} post={props.post}/>
                                </Box>
                            </Fade>
                

                        </Modal>
                    </Grid>
                </Card>
            </Grid>
                  
        </>
    )
}
