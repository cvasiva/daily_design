import React, { useRef } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ContactInnerContainer from "../components/ContactInnerContainer";
import "./Consultation.css"
const Consultation = () => {
  const form = useRef();
  const Navigate = useNavigate();

  var intialvalues = {
    Name: "",
    Phone_Number: "",
    Mail_id: "",
    Interested: "",
  };

  const Validations = Yup.object({
    Name: Yup.string().required("Required"),
    Phone_Number: Yup.string().required("Required"),
    Mail_id: Yup.string().required("Required"),
    Interested: Yup.string().required("Required"),
  });
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: intialvalues,
    validationSchema: Validations,
    onSubmit: () => {
      emailjs
        .sendForm(
          "service_js8o73p",
          "template_i4avavj",
          form.current,
          "r3px-G0tW4EdqpPcJ"
        )
        .then(
          (result) => {
            console.log(result.text);
            Navigate("/");
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });
  return (
    <div>
      <Navbar />
    
      <section className="contact-inner-container-parent">
        <ContactInnerContainer />
      </section>
    </div>
  );
};

export default Consultation;
