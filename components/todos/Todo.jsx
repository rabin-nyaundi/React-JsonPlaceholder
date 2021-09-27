import { Backdrop, Button, Fade, Grid, Modal, TableCell, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { modalStyle } from "../assets/css/Styles";
import TodoForm from "./TodoForm";

export default function Todo(props) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }


    return (
        <>
            <TableRow>
                <TableCell>{props.id}</TableCell>
                <TableCell>{props.title}</TableCell>
                <TableCell>
                    <Button 
                        variant="outlined"
                        onClick={handleOpen}
                    >
                        Edit
                    </Button>
                </TableCell>
                <TableCell>
                    <Button 
                        variant="outlined"
                        onClick={props.delete}
                    >
                        Delete
                    </Button>
                </TableCell>

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
                                <TodoForm onClose ={handleClose} todo={props.todo}/>
                            </Box>
                        </Fade>
            

                    </Modal>
                </Grid>
            </TableRow>
        </>
    )
}
