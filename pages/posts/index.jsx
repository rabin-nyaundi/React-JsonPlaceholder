import { Backdrop, Button, Container, CssBaseline, Fade, Grid, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { modalStyle } from "../../components/assets/css/Styles";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Post from "../../components/posts/Post";
import PostForm from "../../components/posts/PostForm";

export default function Index() {

    const [posts, setposts] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        readPosts();
    },[])
    const readPosts = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts')

        .then((response) => response.json())

        .then((response) => {
            console.log(response)
            setposts(response)
            setposts(resonse)
        }).catch((err)=>{
            console.log(err.response)
        })
    }


    const handleDelete = (id) =>{
        console.log(id)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
        .then((response) =>response.json())
        .then((response)=>{
            console.log(response,"deleted")
            toast.success("Post deleted")
        }).catch((err)=>{
            console.log(err.response)
        })
}


      const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }


    return (
        <>
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
                            Add Post
                        </Button>
                    </Box>
                    <Box>
                        <Grid container spacing={2}>
                            {posts.map((post, key)=>(
                                <Post 
                                    key={key} 
                                    title={post.title} 
                                    body={post.body} 
                                    post={post}
                                    delete={()=>handleDelete(post.id)}
                                />
                            ))}
                        </Grid>
                    </Box>


                    {/* Modal for postform */}
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
                                    <PostForm  
                                        onClose ={handleClose} 
                                        post={{}}
                                    />
                                </Box>
                            </Fade>
                

                        </Modal>
                        </Grid>

                </Container>
            </DashboardLayout>
        </>
    )
}
