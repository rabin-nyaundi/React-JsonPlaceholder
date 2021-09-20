import { Button, Container, CssBaseline, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Album from "../../components/album/Album";
import DashboardLayout from "../../components/layout/DashboardLayout";

export default function Index() {

    const router = useRouter();

    const [albums, setalbums] = useState([]);

    useEffect(()=>{
        readAlbums();
    },[])
    function readAlbums() {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then((res)=> res.json())
        .then((response)=>{
            setalbums(response)
            console.log("albums",response)
        }).catch((err)=>{
            console.log(err.response)
        })
    }


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
                            {albums.map((album, index)=>(
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
