import { Backdrop, Button, Container, CssBaseline, Fade, Grid, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Users from "../../components/users/Users";
import { modalStyle } from "../../components/assets/css/Styles";
import UserForm from "../../components/users/UserForm";
import { toast } from "react-toastify";
import { discard, get } from "../../components/utils/API";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteUser } from "../../components/store/actions";


export function Index() {

    const dispatch = useDispatch();
    const allUsers = useSelector(state => state.allUsers)
    const { users } = allUsers

    const [open, setOpen] = useState(false);

    const handleDelete = (id) =>{
        dispatch(deleteUser(id));
        toast.success("User deleted")
        console.log("deleted")
    }

     const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }


    return (
        <DashboardLayout>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Box
                    sx={{width: '100%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        padding: '1rem',
                    }} 
                >
                    <Button 
                        onClick={handleOpen}
                        variant="outlined">
                        Add User
                    </Button>
                </Box>
                <Box 
                    className="{classes.paper}"
                    bgcolor="background.paper"
                    boxShadow={1}
                >
                    <Grid container spacing={1} p={3}>
                        {users && users.map((user, key)=>(
                            <Users 
                                key={key}
                                user={user}
                                users={users}
                                name={user.name}
                                email={user.email}
                                username={user.username}
                                // company={user.company.name}
                                delete={()=>handleDelete(user.id)}
                            />
                        ))}
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
                                        <UserForm  onClose ={handleClose} user={{}}/>
                                    </Box>
                                </Fade>
                    

                            </Modal>
                        </Grid>
                    </Grid>
                </Box>


            </Container>
        </DashboardLayout>
    )
}


export default connect(null, {deleteUser})(Index)