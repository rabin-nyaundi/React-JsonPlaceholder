import { useEffect, useState } from 'react';
import DashboardLayout from '../components/layout/DashboardLayout'
import { Container, CssBaseline, Box, Grid, Divider, Typography } from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import TaskIcon from '@mui/icons-material/Task';
import { get } from '../components/utils/API';

import { connect, useDispatch, useSelector } from 'react-redux';
import {setUsers, setPosts, fetchUsers, fetchPosts, fetchAlbums, fetchTodos} from '../components/store/actions';


export function Home() {

  const dispatch = useDispatch();
  const allUsers = useSelector(state => state.allUsers)
  const { users } = allUsers;

  const allPosts = useSelector(state => state.allPosts)
  const { posts } = allPosts;

  const allAlbums = useSelector(state => state.allAlbums)
  const { albums } = allAlbums;

  const allTodos = useSelector(state => state.allTodos)
  const { todos } = allTodos;


   useEffect(() => {
     dispatch(fetchUsers());
     dispatch(fetchPosts());
     dispatch(fetchAlbums());
     dispatch(fetchTodos())
    },[]);

  
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
                        {users && users.length}
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
                        {posts && posts.length}
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
                        {albums && albums.length}
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
                        {todos && todos.length}
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


const mapStateToProps = (state) => ({
  currentUsers: state.currentUsers
});

const mapDispatchToProps = {
  setUsers : setUsers, 
  setPosts:setPosts,
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
