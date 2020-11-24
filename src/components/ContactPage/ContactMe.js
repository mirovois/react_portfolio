import React, { Component } from 'react';
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid, TextareaAutosize, TextField } from '@material-ui/core';

// import './ContactMe.css';

const styles = (theme) => ({
    root: {
        minHeight: "85vh",
        margin: "4rem 7% 1rem 7%",
        maxWidth: "90%",
        padding: "1.2rem",
        zIndex: 1,
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.8)",
        background: "linear-gradient(#3a6479, #01737c)"
    },
    form__wrapper:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    title: {
        display: "block",
        fontSize: "calc(1.8rem + 1.2vw)",
        fontFamily: "Vidaloka",
        color: "var(--text-color-1)",
        opacity: 0.8,
        letterSpacing: "2px",
        textAlign:"center",
        marginBottom: "0.7rem",
    },
    input__block: {
        marginTop: "1.6rem",
        background: "white",
        width: "18rem"
    },
    text__area: {
        margin: "1rem 0 0.2rem 0",
        background: "white",
        width: "16rem",
    },
    error_message: {
        fontSize: 14,
        color: "rgb(110, 7, 7)",
        fontWeigth: "bold"
    },
    confirmation_message: {
        textAlign: "center",
        color: "white",
    },
    btn__submit:{
        backgroundColor:" rgb(78, 75, 70)",
        color:"var(--text-color)",
        marginTop: "0.6rem",
        paddin:"2px"
    }
  });

const validate = (firstName, lastName, email, message) => {
    const errors = {};
    if (!firstName) {
      errors.firstName = "First name can't be empty";
    }
    if (!lastName) {
      errors.lastName = "Last name can't be empty";
    }
  
    if (typeof email !== "undefined") {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        errors.email = "Please enter valid email address.";
      }
    }
      return errors;
  };

 class ContactMe extends Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        sent: false,
        errors: {},
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email } = this.state;
    
        const errors = validate(firstName, lastName, email);
        if (Object.values(errors).length > 0) {
          this.setState({ errors: errors });
          return;
        }
        let data = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          message: this.state.message,
        };
        axios
          .post("https://miro-profile.herokuapp.com/api/form", data)
          .then((res) => {
            this.setState({
              sent: true,
            });
            this.resetForm();
          })
          .catch(() => {
            console.log("Data not sent");
          });
      };
      resetForm(e){
        const { name} = e.target;
        this.setState({ [name]: '' });
      }
    
      handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => console.log(this.state));
      };
    
    render() {
        const { errors } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                 <h1 className={classes.title}>Contact Me</h1> 
                 <form onSubmit={this.handleSubmit} className={classes.form__wrapper}>
                 {this.state.sent ? (
                    <h2 className={classes.confirmation_message}>
                    Your message has been sent. Thank you for your interest!
                    </h2>
                 ) : (
                 <Grid
                    container
                    spacing={3}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                 <TextField
                    name="firstName"
                    type="text"
                    // className="input__block"
                    className={classes.input__block}
                    style={{marginTop:"1rem"}}
                    label="First Name"
                    variant="filled"
                    onChange={this.handleChange}
                />
            {"firstName" in errors && (
              <span className={classes.error_message}>{errors.firstName}</span>
            )}
                    <TextField
                    // className="input__block"
                    className={classes.input__block}
                    name="lastName"
                    type="text"
                    label="Last Name"
                    variant="filled"
                    onChange={this.handleChange}
                    />
            {"lastName" in errors && (
              <span className={classes.error_message}>{errors.lastName}</span>
            )}
                    <TextField
                    name="email"
                    type="text"
                    // className="input__block"
                    className={classes.input__block}
                    label="E-mail "
                    variant="filled"
                    onChange={this.handleChange}
                    />
            {"email" in errors && (
              <span className={classes.error_message}>{errors.email}</span>
            )}
                    <TextareaAutosize
                    name="message"
                    type="text"
                    rowsMin={4}
                    // className="text__area"
                    className={classes.text__area}
                    multiline
                    placeholder="your message..."
                    onChange={this.handleChange}
                    />
            {"message" in errors && (
              <span className={classes.error_message}>{errors.message}</span>
            )}
                    <Button type="submit" variant="contained" className={classes.btn__submit}>
                    Submit
                    </Button>
                
            </Grid> )}  
                 </form>
            </div>
        )
    }
}
export default withStyles(styles)(ContactMe);