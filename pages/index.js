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

                    <Grid xs style={{display:'flex', justifyContent:'flex-end'}} item >number</Grid>

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

                    <Grid xs style={{display:'flex', justifyContent:'flex-end'}} item >number</Grid>

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

                    <Grid xs style={{display:'flex', justifyContent:'flex-end'}} item >number</Grid>

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

                    <Grid xs style={{display:'flex', justifyContent:'flex-end'}} item >number</Grid>

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
