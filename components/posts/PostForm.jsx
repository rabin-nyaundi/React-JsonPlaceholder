import { Formik } from 'formik';
import * as Yup from 'yup'
import { toast } from "react-toastify";
import { Button, Container, CssBaseline, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { patch, post } from '../utils/API';


export default function PostForm(props) {

    const post = props.post;

      function handlePost(validationSchema) {


        let postData ={
            title: validationSchema.title,
            body: validationSchema.body
        }

       if ('id' in post){
           patch(`/posts/${post.id}`,postData)
                .then((response) => {
                    toast.success('Post Updated')
                    console.log(response)
                    props.onClose();
                }).catch((err)=>{
                    console.log(err.response)
                 })
       }
       else{
        console.log("id not in post")

            post('/posts',postData)
                .then((response) => {
                    toast.success('post Added')
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
                            title: props.post.title,
                            body: props.post.body,
                        }}

                        validationSchema={
                            Yup.object().shape({
                                title: Yup.string().required('Title is required'),
                                body: Yup.string().required('body is required'),
                            })
                        }
                        onSubmit={async (validationSchema) => {
                            handlePost(validationSchema);
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
                                            label="Title"
                                            fullWidth
                                            required
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid container m={1} spacing={2}>
                                        <Grid item xs={12} sm={12}>
                                            <TextField
                                                error={Boolean(touched.body && errors.body)}
                                                helperText={touched.body && errors.body}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.body}
                                                name="body"
                                                id="body"
                                                type="text"
                                                label="Body"
                                                required
                                                fullWidth
                                            />
                                        </Grid>

                                    </Grid>

                                </Grid>
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
