import { Formik } from 'formik';
import * as Yup from 'yup'
import { toast } from "react-toastify";
import { Button, Container, CssBaseline, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { patch, post } from '../utils/API';



export default function TodoForm(props) {

    const todo = props.todo;

    
    function handleTodo(validationSchema) {
        

        let postData ={
            userId: 1,
            title: validationSchema.title,
            completed: false,
        }

       if ('id' in todo){
           patch(`/todos/${todo.id}`, postData)
                .then((response) => {
                    toast.success('Todo Updated')
                    console.log(response)
                    props.onClose();
                }).catch((err)=>{
                    console.log(err.response)
                 })
       }
       else{

            post('/todos', postData)
                .then((response) => {
                    toast.success('Todo Added')
                    console.log(response)
                    props.onClose();
                }).catch((err)=>{
                    console.log(err.response)
                 })
                }
            };
    return (
        <div>
            <Container component="main" maxWidth="sm">
                <CssBaseline />
                <Box 
                    className="{classes.paper}"
                    bgcolor="background.paper" 
                    boxShadow={1}
                    p={3}
                    sx={{background:'#fff'}}
                >
                    <Formik
                        initialValues={{
                            title: props.todo.title,
                            completed: props.todo.completed,
                        }}

                        validationSchema={
                            Yup.object().shape({
                                title: Yup.string().max(50).required('Todo title is required'),
                            })
                        }
                        onSubmit={async (validationSchema) => {
                            handleTodo(validationSchema);
                        }}
                    >
                        {({
                              errors,
                              handleBlur,
                              handleChange,
                              handleSubmit,
                              isSubmitting,
                              touched,
                              values
                          }) => (
                            <form className="{classes.form}" onSubmit={handleSubmit} noValidate>

                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                            error={Boolean(touched.title && errors.title)}
                                            helperText={touched.title && errors.title}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.title}
                                            name="title"
                                            id="title"
                                            type="text"
                                            label="Todo title"
                                            fullWidth
                                            required
                                            autoFocus
                                        />
                                    </Grid>

                                </Grid>
                                <br />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className="{classes.submit}"
                                >
                                    Submit
                                </Button>
                            </form>
                        )}
                    </Formik>
                </Box>
            </Container>
        </div>
    )
}
