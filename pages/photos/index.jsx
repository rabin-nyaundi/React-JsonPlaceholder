import { ImageList } from "@mui/material";
import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Photo from '../../components/photos/Photo';
import { get } from "../../components/utils/API";


export default function index() {

    const [photos, setphotos] = useState([]);
    const [loading, setloading] = useState(false)

    useEffect(() =>{
        readPhotos();
    },[])

    function readPhotos() {
        setloading(true)
        get('/photos/?albumId=1')
        .then((response) =>{
            setphotos(response)
            console.log(response)
            setloading(false)
        })
        .catch((err)=>{
            console.log(err.response)
        });
    }


    return (
        <DashboardLayout>
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

    )
}
