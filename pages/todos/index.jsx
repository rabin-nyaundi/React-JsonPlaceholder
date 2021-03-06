import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Todo from "../../components/todos/Todo";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { Backdrop, Button, Container, CssBaseline, Fade, Grid, Modal } from "@mui/material";
import { modalStyle } from "../../components/assets/css/Styles";
import TodoForm from "../../components/todos/TodoForm";
import { Box } from "@mui/system";
import { get } from "../../components/utils/API";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../components/store/actions";
import { toast } from "react-toastify";

export default function index() {

    const allTodos = useSelector(state => state.allTodos)
    const { todos } = allTodos;
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
        toast.success('Todo deleted')
    }



    return (
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
                        Add Todo
                    </Button>
                </Box>
                <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos && todos.map((todo, key)=>(
                            <Todo 
                                key={key} 
                                id={todo.id} 
                                title={todo.title} 
                                completed={todo.completed} 
                                todo={todo}
                                delete={()=>handleDelete(todo.id)}
                            />
                        ))}
                    </TableBody>
                </Table>
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
                                <TodoForm  onClose ={handleClose} todo={{}}/>
                            </Box>
                        </Fade>
            

                    </Modal>
                </Grid>
            </TableContainer>
            </Container>
        </DashboardLayout>
    )
}
