import { Formik } from 'formik';
import * as Yup from 'yup'
import { toast } from "react-toastify";
import { Button, Container, CssBaseline, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';


export default function UserForm(props) {

    const user = props.user

    console.log(user.id);

    function handleAddUser(validationSchema) {

        console.log("Adding the user")
        // Only capture the name username and email

        let postData ={
            name: validationSchema.name,
            username: validationSchema.username,
            email: validationSchema.email,

        // I decided to leave the below fields default values
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",

                geo: {
                    lat: "-37.3159",
                    lng: "81.1496"
                }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",

            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets" 
            }
        }

       if ('id' in user){
           fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`,{
                method: 'PUT',
                body: JSON.stringify(postData),
                 headers: {
                     'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
                .then((response) => {
                    toast.success('User Updated')
                    console.log(response)
                    props.onClose();
                }).catch((err)=>{
                    console.log(err.response)
                 })
       }
       else{
        //    let users;

            fetch('https://jsonplaceholder.typicode.com/users',{
                method: 'POST',
                body: JSON.stringify(postData),
                 headers: {
                     'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
                .then((response) => {
                    toast.success('User Added')
                    console.log(response)
                    props.onClose();
                    // users = [postData,...this.props.users];
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
                            name: props.user.name,
                            username: props.user.username,
                            email: props.user.email,
                        }}

                        validationSchema={
                            Yup.object().shape({
                                name: Yup.string().max(50).required('Name Name is required'),
                                username: Yup.string().max(50).required('Username is required'),
                                email: Yup.string().max(50).required('User Email is required'),
                            })
                        }
                        onSubmit={async (validationSchema) => {
                            handleAddUser(validationSchema);
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
                                            error={Boolean(touched.name && errors.name)}
                                            helperText={touched.name && errors.name}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.name}
                                            name="name"
                                            id="name"
                                            type="text"
                                            label="Name"
                                            fullWidth
                                            required
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid container m={1} spacing={2}>
                                        <Grid item md={6} xs={12} sm={12}>
                                            <TextField
                                                error={Boolean(touched.username && errors.username)}
                                                helperText={touched.username && errors.username}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.username}
                                                name="username"
                                                id="username"
                                                type="text"
                                                label="Username"
                                                required
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item md={6} xs={12} sm={12}>
                                            <TextField
                                                error={Boolean(touched.email && errors.email)}
                                                helperText={touched.email && errors.email}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.email}
                                                name="email"
                                                id="email"
                                                type="email"
                                                label="email"
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


// 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