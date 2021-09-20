import { Backdrop, Button, Container, CssBaseline, Fade, Grid, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Users from "../../components/users/Users";
import { modalStyle } from "../../components/assets/css/Styles";
import UserForm from "../../components/users/UserForm";
import { toast } from "react-toastify";


export default function Index() {

    const [open, setOpen] = useState(false);
    const [users, setusers] = useState([]);

    useEffect(() => {
        readUsers();
    }, []);

    const readUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')

        .then((response) => response.json())

        .then((response) =>{
            setusers(response)
            consolelog("users",response)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    const handleDelete = (id) =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE',
        }).then((response) =>response.json())
        .then((response)=>{
            console.log(response,"deleted")
            readUsers();
            toast.success("User deleted")
        }).catch((err)=>{
            console.log(err.response)
        })
        console.log("delete user", id)
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
                        {users.map((user, key)=>(
                            <Users 
                                key={key}
                                user={user}
                                users={users}
                                name={user.name}
                                email={user.email}
                                address={user.address.city}
                                company={user.company.name}
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