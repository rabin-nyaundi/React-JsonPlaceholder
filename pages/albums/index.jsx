import { Button, Container, CssBaseline, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Album from "../../components/album/Album";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { get } from "../../components/utils/API";

export default function Index() {

    const router = useRouter();
    
    const allAlbums = useSelector(state => state.allAlbums)
    const { albums } = allAlbums;

    function handleNavigate(id){
        console.log("Yessss",id)
        router.push(`/albums/${id}`)
    }

    return (
        <DashboardLayout>
            <Container component="main" maxWidth="lg">
                <CssBaseline />
                <Grid  p={2} sx={{display:'flex', justifyContent:'flex-end'}}>
                    <Button variant="outlined" size="small">
                        Add Album
                    </Button>
                </Grid>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>View</TableCell>
                                <TableCell>Edit</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {albums && albums.map((album, index)=>(
                                <Album 
                                    key={index} 
                                    id={album.id} 
                                    handleRoute ={()=>handleNavigate(album.id)} 
                                    title={album.title} 
                                />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </DashboardLayout>
    )
}
