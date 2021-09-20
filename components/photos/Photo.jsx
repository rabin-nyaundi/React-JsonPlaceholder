import Image from 'next/image';
import { Container, CssBaseline, Grid, ImageList, ImageListItem, Typography } from "@mui/material";

export default function Photo(props) {
    return (
        <>
           
        <ImageListItem>
            <img 
                src={props.src} 
                srcSet={`${props.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                loading="lazy"
            />
            <br />
            {/* <Typography variant="p">
                {props.title}
            </Typography> */}
        </ImageListItem>
        </>
    )
}
