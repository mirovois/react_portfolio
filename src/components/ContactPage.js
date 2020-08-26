import React, { Component } from "react";
import axios from "axios";
// import { Formik, useFormik } from "formik";
import { makeStyles } from "@material-ui/styles";
import { Grid, TextField, Button, TextareaAutosize } from "@material-ui/core";
import * as Yup from "yup";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: "72%",
    height: "80%",
    marginTop: "6rem",
    marginLeft: "7rem",
    marginBottom: "1rem",
    padding: "1rem",
    background: "-webkit-linear-gradient(to right, #4b6cb7, #182848)",
    background: "linear-gradient(to right, #4b6cb7, #182848)",
    zIndex: 1,
  },
});
const formValidation = (errors) => {
  let isValid = true;
  Object.values(errors).forEach((error) => {
    if (error.length > 0) {
      isValid = false;
    }
    return isValid;
  });
};

export class ContactPage extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    sent: false,
    errors: {
      firstName: "",
      lastName: "",
      email: "",
    },
  };

  handleSubmitClick = (e) => {
    e.preventDefault();

    console.log(`
           Submitting:
         -First Name-${this.state.firstName}
         -Last Name-${this.state.lastName}
         -Email-${this.state.email}
         `);
    // if (formValidation(this.state.errors)) {
    //   console.log(`
    //     SUbmitting:
    //     -First Name-${this.state.firstName}
    //     -Last Name-${this.state.lastName}
    //     -Email-${this.state.email}
    //     `);
    // } else {
    //   console.error("Form invalid!");
    // }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log(value);

    let errors = this.state.errors;

    switch (name) {
      case "firstName":
        errors.firstName =
          value.length < 3 && value.length > 0 ? "minimum 3 characters" : "";
        break;
      case "lastName":
        errors.lastName =
          value.length < 3 && value.length > 0 ? "minimum 3 characters" : "";
        break;
      case "email":
        errors.email =
          value.length < 1 && value.length > 0 ? "Enter email" : "";
        break;
      default:
        break;
    }
    this.setState(
      {
        [name]: value,
      },
      () => console.log(this.state)
    );
  };

  // const classes = useStyles();

  render() {
    return (
      <div style={{ zIndex: 1 }}>
        <h1 style={{ color: "beige" }}>Contact</h1>

        <form noValidate autoComplete="off">
          <Grid
            container
            spacing={3}
            direction="column"
            justify="center"
            alignItems="center"
          >
            <TextField
              required
              name="firstName"
              type="text"
              style={{ marginTop: "3rem", background: "white" }}
              label="First Name"
              variant="outlined"
              onChange={this.handleChange}
            />
            <TextField
              required
              name="lastName"
              type="text"
              style={{ marginTop: "3rem", background: "white" }}
              label="Last Name"
              variant="outlined"
              onChange={this.handleChange}
            />
            <TextField
              required
              name="email"
              type="text"
              style={{ margin: "3rem 0", background: "white" }}
              label="E-mail "
              variant="outlined"
              onChange={this.handleChange}
            />
            <TextareaAutosize
              aria-label="minimum height"
              name="text"
              style={{ margin: "3rem 0", background: "white" }}
              rowsMin={3}
              label="Message..."
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={(e) => {
                this.handleSubmitClick(e);
              }}
            >
              Log In
            </Button>
          </Grid>
        </form>
      </div>
    );
  }
}

export default ContactPage;

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string()
//         .min(0, "Please, enter your first name")
//         .required("Required"),
//       lastName: Yup.string()
//         .min(0, "Please, enter your first name")
//         .required("Required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("No e-mail provided"),
//     }),

//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

/* <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            // .min(1, "Please, enter your first name")
            .required("First name is required"),
          lastName: Yup.string()
            // .min(20, "Please, enter your last name")
            .required("Last name is required"),
          email: Yup.string().email().required("No email provided"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Logging in", values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}

            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <button type="submit">Submit</button>
          </form>
        )}
       </Formik>*/
