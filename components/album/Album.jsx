import { Button, TableCell, TableRow, Typography } from "@mui/material";
import Link from 'next/link';

export default function Album(props) {
    return (
        <>
            <TableRow>
                <TableCell>{props.id}</TableCell>
                <TableCell>
                    <Typography variant="body" href={""} onClick={props.handleRoute}>
                        {props.title}
                    </Typography>
                </TableCell>
                <TableCell>
                    <Button onClick={props.handleRoute} variant="outlined" size="small">View</Button>
                </TableCell>
                <TableCell>
                    <Button variant="outlined" size="small">Edit</Button>
                </TableCell>
                <TableCell>
                    <Button variant="outlined" size="small">Delete</Button>
                </TableCell>
            </TableRow>
        </>
    )
}
