import { Button, Grid, ImageList } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Photo from "../../components/photos/Photo";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';


export default function Index({id}) {
    const router = useRouter();

    const [photos, setphotos] = useState([]);
    const [loading, setloading] = useState(false)

    useEffect(() =>{
        readPhotos();
    },[])

    function readPhotos() {
        setloading(true)
        fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`)
        .then((res) =>res.json())
        .then((response) =>{
            setphotos(response)
            console.log(response)
            setloading(false)
        })
        .catch((err)=>{
            console.log(err.response)
        });
    }

    function handleBack () {
        router.back();
    }
    return (
        <div>
            <DashboardLayout>
                <Grid container spaciing={2}>
                    <Grid item xs p={2} sx={{display:'flex', justifyContent:'flex-start'}}>
                        <Button onClick={handleBack} variant="outlined" size="small">
                        Back
                        </Button>
                    </Grid>
                    <Grid xs p={2} sx={{display:'flex', justifyContent:'flex-end'}}>
                        <Stack direction="row" spacing={1}>
                            <Chip label="Total Photos" variant="outlined" />
                            <Chip label={photos.length} variant="outlined" />
                        </Stack>
                    </Grid>
                    </Grid>
                <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={164}>
                    {photos.map((photo, index)=>(
                        <Photo 
                            key={index} 
                            src={`${photo.url}?w=164&h=164&fit=crop&auto=format`} 
                            title={photo.title} 
                            loading="lazy"
                        />
                    ))}
                </ImageList>
            </DashboardLayout>
        </div>
    )
}


export async function getServerSideProps(context){
    const { params } = context;

    const albumId = params.id;

    return {
        props: {
            id: albumId
        }
    }
}