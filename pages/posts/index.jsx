import { Backdrop, Button, Container, CssBaseline, Fade, Grid, Modal } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { modalStyle } from "../../components/assets/css/Styles";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Post from "../../components/posts/Post";
import PostForm from "../../components/posts/PostForm";
import { discard, get } from "../../components/utils/API";

export default function Index() {

    const allPosts = useSelector(state => state.allPosts)
    const { posts } = allPosts;

    const [open, setOpen] = useState(false);

    useEffect(()=>{
        readPosts();
    },[])
    const readPosts = () =>{
        get('/posts')
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
        discard(`/posts/${id}`, {
            method: 'DELETE',
        })
        .then((response)=>{
            toast.success("Post deleted")
            console.log(response,"deleted")
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
                            {posts && posts.map((post, key)=>(
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
