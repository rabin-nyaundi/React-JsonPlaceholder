import { useEffect, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import DashboardLayout from '../components/layout/DashboardLayout'
import { Container, CssBaseline, Box, Grid, Divider, Typography } from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import TaskIcon from '@mui/icons-material/Task';



export default function Home() {



  const [users, setusers] = useState([]);
  const [todos, settodos] = useState([]);
  const [posts, setposts] = useState([]);
  const [albums, setalbums] = useState([])

   useEffect(() => {
        readUsers();
        readAlbums();
        readTodos();
        readPosts();
    }, [])

  function readUsers(){
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


  function readTodos(){
     fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>res.json())
        .then((response) =>{
            settodos(response)
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
      })
  }


  function readAlbums(){
     fetch('https://jsonplaceholder.typicode.com/albums')
        .then((res)=> res.json())
        .then((response)=>{
            setalbums(response)
            console.log("albums",response)
        }).catch((err)=>{
            console.log(err.response)
        })
  }

  
  function readPosts(){
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
  


  return (
    <>
      <DashboardLayout title="Weza app">
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Box p={2}>
            <Grid container spacing={2}>
              <Grid item md={3} sm={6} xs={12} >

                <Box sx={{ padding: '1rem', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderRadius:'.5rem'}}>
                  <Grid>
                    <Typography variant="h5" p={2}>
                      Users
                    </Typography>
                  </Grid>

                  <Divider />

                  <Grid 
                    container 
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                  >
                    <Grid item xs>
                      <PeopleAltOutlinedIcon fontSize="large" />
                    </Grid>

                    <Grid xs style={{display:'flex', justifyContent:'flex-end'}} item >
                      <Typography component="h2" variant="h4">
                        {users.length}
                      </Typography>
                      </Grid>

                  </Grid>
                </Box>
              </Grid>

              <Grid item md={3} sm={6} xs={12} >

                <Box sx={{ padding: '1rem', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderRadius:'.5rem'}}>
                  <Grid>
                    <Typography variant="h5" p={2}>
                      Posts
                    </Typography>
                  </Grid>

                  <Divider />

                  <Grid 
                    container 
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                  >
                    <Grid item xs>
                      <PostAddIcon fontSize="large" />
                    </Grid>

                    <Grid xs style={{display:'flex', justifyContent:'flex-end'}} item >
                      <Typography component="h2" variant="h4">
                        {posts.length}
                      </Typography>
                    </Grid>

                  </Grid>
                </Box>
              </Grid>

              <Grid item md={3} sm={6} xs={12} >

                <Box sx={{ padding: '1rem', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderRadius:'.5rem'}}>
                  <Grid>
                    <Typography variant="h5" p={2}>
                      Albums
                    </Typography>
                  </Grid>

                  <Divider />

                  <Grid 
                    container 
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                  >
                    <Grid item xs>
                      <PhotoAlbumIcon fontSize="large" />
                    </Grid>

                    <Grid xs style={{display:'flex', justifyContent:'flex-end'}} item >
                      <Typography component="h2" variant="h4">
                        {albums.length}
                      </Typography>
                    </Grid>

                  </Grid>
                </Box>
              </Grid>

              <Grid item md={3} sm={6} xs={12} >

                <Box sx={{ padding: '1rem', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', borderRadius:'.5rem'}}>
                  <Grid>
                    <Typography variant="h5" p={2}>
                      Todos
                    </Typography>
                  </Grid>

                  <Divider />

                  <Grid 
                    container 
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                  >
                    <Grid item xs>
                      <TaskIcon fontSize="large" />
                    </Grid>

                    <Grid xs style={{display:'flex', justifyContent:'flex-end'}} item >
                      <Typography component="h2" variant="h4">
                        {todos.length}
                      </Typography>
                      </Grid>

                  </Grid>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Container>
      </DashboardLayout>
    </>
  )
}
