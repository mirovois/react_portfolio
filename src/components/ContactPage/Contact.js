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
        margin: "3.3rem 6% 1rem 7%",
        maxWidth: "80%",
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
      marginTop: theme.spacing(1),
      color:"rgb(170, 167, 163)",
      width: theme.spacing(8),
      height: theme.spacing(8),
      backgroundColor:" #6b6961"
    },
    form: { 
      marginLeft:"20%",
      marginRight:"20%",
      // marginTop: theme.spacing(1),
    },
    input__block: {
      background: "white",
      borderRadius:"10px",
      border:"2px #6b6961 solid",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.6)",
  },
    submit: {
      margin: theme.spacing(1, 0, 1),
      backgroundColor:" #6b6961",
      borderRadius:"10px",
    },
    text__area: {
        marginTop: theme.spacing(2),
        width: "20rem",
    },  
    contact__title: {
      display: "block",
      fontSize: "calc(1.4rem + 1.2vw)",
      fontFamily: "Vidaloka",
      color: "var(--text-color-1)",
      opacity: 0.8,
      letterSpacing: "2px"
    },
    error_message: {
      fontSize: 14,
      color: "rgb(110, 7, 7)",
      fontWeigth: "bold"
  },
  }));

  // Validation
  const validate = (firstName, lastName, email, message) => {
    const errors = {};
    if (!firstName) {
      errors.firstName = "First name can't be empty";
    }
    if (!lastName) {
      errors.lastName = "Last name can't be empty.";
    }
  
    if (typeof email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        errors.email = "Please enter a valid email address.";
      }
    }
      return errors;
  };

function Contact() {
    const classes = useStyles();
    const [values, setValues] = useState({firstName:'',
    lastName:'',
    email:'',
    message:''
  });
    const[sent, setSent] = useState(false);
    const[loading, setLoading] = useState(false);
    const[errors, setErrors] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]:value
      })
      console.log(values);
    };

    const handleSubmit = (e) =>{
      e.preventDefault();
      setSent(false);
      setLoading(true);
      const { firstName, lastName, email,message } = values;
      let data = {
        firstName,
        lastName,
        email,
        message
      };
      const errors = validate(firstName, lastName, email);
        
      if (Object.values(errors).length > 0) {
          setErrors({ ...errors,errors: errors });
          setLoading(false);
          return;
        }

      console.log(data);
      axios
          .post("https://miro-profile.herokuapp.com/api/form", data)
          .then((res) => {
            setSent(true);
            setLoading(false);
            console.log("Data sent");
          })
          .catch(() => {
            setSent(false);
            console.log("Data not sent");
          });
    }

    return (
//  <div className="contact__wrapper">
//             <h1>Contact Form</h1>

    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <EmailOutlinedIcon/>
        </Avatar>
        <Typography className={classes.contact__title}>
          Send email
        </Typography>
        {sent ? (<h1>Your message has been successfully sent!</h1>) : (
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            className={classes.input__block}
            variant="filled"
            // margin="normal"
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
           {"firstName" in errors && (
              <span className={classes.error_message}>{errors.firstName}</span>
            )} 
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
          {"lastName" in errors && (
              <span className={classes.error_message}>{errors.lastName}</span>
            )} 
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
            {"email" in errors && (
                <span className={classes.error_message}>{errors.email}</span>
              )} 
          <TextField
            className={classes.input__block}
            variant="filled"
            margin="normal"
            fullWidth
            id="filled-textarea"
            label="Your message..."
            multiline
            rows={1}
            name="message"
            value={values.message}
            onChange={handleChange}
          /> 
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
            disabled={loading || errors.length>=0}
          >
             {loading ? (
                "Submiting..."
              ) : (
                "Submit"
              )}
          </Button>
        </form>
        )}
        
      </div>
    </Container>
    )
}

export default Contact
