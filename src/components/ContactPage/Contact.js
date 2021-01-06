import React from 'react';
import axios from "axios";
import { Avatar, Button, Container, CssBaseline, Grid, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { makeStyles } from '@material-ui/core/styles';
import './ContactMe.css';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight:"85vh",
        margin: "4rem 7% 1rem 7%",
        maxWidth: "80%",
        // padding: "1rem",
        zIndex: 1,
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
        background:"linear-gradient(#3a6479, #01737c)"
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      // backgroundColor: "rgb(170, 167, 163)",
      color:"rgb(170, 167, 163)",
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
    form: {
    //   minWidth: '30%', 
      marginLeft:"25%",
      marginRight:"25%",
      marginTop: theme.spacing(1),
    },
    input__block: {
      // marginTop: "1.6rem",
      background: "white",
      borderRadius:"10px",
      border:"2px #6b6961 solid",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.6)",
  },
    submit: {
      margin: theme.spacing(1, 0, 1),
      backgroundColor:" #6b6961"
    },
    text__area: {
        // marginRight: "10%",
        // marginLeft: "10%",
        marginTop: theme.spacing(2),
        width: "20rem",
    },  
  }));

  const initialValues = {
    firstName:'',
    lastName:'',
    email:'',
    message:'',
    sent: false,
  }


function Contact() {
    const classes = useStyles();
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
      const { name, value } = e.target;
      // this.setState({ [name]: value }, () => console.log(this.state));
      setValues({
        ...values,
        [name]:value
      })
      console.log(values);
    };
    // const resetForm = (e) =>{
    //   const { name} = e.target
    //   setValues({ ...values, [name]: '' });
    // }

    const handleSubmit = (e) =>{
      e.preventDefault();
      const { firstName, lastName, email,message } = values;
      let data = {
        firstName,
        lastName,
        email,
        message
      };
      console.log(data);
      axios
          .post("https://miro-profile.herokuapp.com/api/form", data)
          .then((res) => {
            setValues({
              ...values,
              sent: true,
            });
            console.log("Data sent");
          })
          .catch(() => {
            console.log("Data not sent");
          });
    }

    return (
//  <div className="contact__wrapper">
//             <h1>Contact Form</h1>

    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} sizes="medium">
          <EmailOutlinedIcon/>
        </Avatar>
        {/* <Typography component="h1" variant="h5">
          Send email
        </Typography> */}
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            className={classes.input__block}
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="name"
            autoFocus
            value={values.firstName}
            onChange={handleChange}
          />    
          <TextField
            className={classes.input__block}
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lastName"
            autoFocus
            value={values.lastName}
            onChange={handleChange}
          />  
          <TextField
            className={classes.input__block}
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={values.email}
            onChange={handleChange}
          />
          <TextField
            className={classes.input__block}
            variant="filled"
            margin="normal"
            fullWidth
            id="filled-textarea"
            label="Your message..."
            multiline
            rows={2}
            name="message"
            value={values.message}
            onChange={handleChange}
          /> 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
    )
}

export default Contact
