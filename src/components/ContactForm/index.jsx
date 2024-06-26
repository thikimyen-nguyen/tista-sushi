import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { SecondaryButton } from "../Buttons";
import image3 from "../../assets/images/removebg.png";
import ReCAPTCHA from "react-google-recaptcha"; // Added import

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Your full name should be at least 3 characters.")
      .required("Please enter your first name."),
    subject: yup
      .string()
      .min(3, "Subject should be at least 3 characters.")
      .required("Please enter subject"),
    email: yup
      .string()
      .email("Please enter a valid email address.")
      .required("Please enter your email."),
    body: yup
      .string()
      .min(3, "Your message should be at least 3 characters.")
      .required("Please enter your message."),
  })
  .required();

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null); // Added state for reCAPTCHA token

  function onSubmit(data) {
    if (!recaptchaToken) {
      // Check for reCAPTCHA token
      window.alert("Please click to verify reCAPTCHA!");
      return;
    }

    const templateParams = {
      ...data,
      "g-recaptcha-response": recaptchaToken, // Include reCAPTCHA token
    };
    emailjs
      .send(
        "service_gpkyeng",
        "template_qgg4pin",
        templateParams,
        "XHRxxVuzePZubZk48"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitSuccess(true);
          reset();
          setRecaptchaToken(null); // Reset reCAPTCHA token on success
        },
        (error) => {
          console.log("FAILED...", error);
          window.alert("ERROR! Could not send message. Please try again!");
          reset();
          setRecaptchaToken(null); // Reset reCAPTCHA token on failure
        }
      );
  }

  useEffect(() => {
    if (submitSuccess) {
      window.alert("Your message was sent successfully!");
      setSubmitSuccess(false);
    }
  }, [submitSuccess]);

  return (
    <div className="my-5 p-3">
      <h1 className="text-center">kontakt oss</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-col md:w-2/4 content-center mx-auto"
      >
        <div className="mb-4">
          <label htmlFor="fullName" className="font-semibold">
            Navn
          </label>
          <input
            type="text"
            id="fullName"
            {...register("fullName")}
            className={`mt-1 p-2 text-black ${
              errors.fullName ? "error-border" : "border-gray-300"
            } rounded w-full`}
            placeholder="John Smith"
          />
          <p className="text-primary">{errors.fullName?.message}</p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-600 font-semibold"
          >
            Emne
          </label>
          <input
            type="text"
            id="subject"
            {...register("subject")}
            className={`mt-1 p-2 text-black ${
              errors.subject ? "error-border" : "border-gray-300"
            } rounded w-full`}
            placeholder="Ditt emne"
          />
          <p className="text-primary">{errors.subject?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-semibold">
            E-post
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`mt-1 p-2 text-black ${
              errors.email ? "error-border" : "border-gray-300"
            } rounded w-full`}
            placeholder="abc@mail.com"
          />
          <p className="text-primary">{errors.email?.message}</p>
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block font-semibold">
            Melding
          </label>
          <textarea
            id="body"
            {...register("body")}
            className={`mt-1 p-2 text-black ${
              errors.body ? "error-border" : "border-gray-300"
            } rounded w-full`}
            placeholder="Meldingen din går her..."
          ></textarea>
          <p className="text-primary">{errors.body?.message}</p>
        </div>
        <div className="mb-4">
          <ReCAPTCHA
            sitekey="6LcOHv4pAAAAABVGYkwfmQX-5xBxRSHTiBy045H3" // Added reCAPTCHA component
            onChange={(token) => setRecaptchaToken(token)}
            onExpired={() => setRecaptchaToken(null)}
          />
        </div>
        <div className="mt-4 text-center">
          <SecondaryButton label="Sende" />
        </div>
      </form>
    </div>
  );
}

export function ContactCover() {
  return (
    <div className="h-56 sm:h-80 md:h-96 flex justify-center items-center my-10">
      <img src={image3} alt="Tista sushi in halden Norway asian restaurant japanese cuisine" className="w-56 md:w-80 animate-spin" />
      <div className="text-start">
      <p className="text-xl md:text-2xl text-orange text-start">Åpningstider:</p>
      <p className="text-white md:text-xl">Man-Fre: <span>10:00 - 19:30</span></p>
      <p className="text-white md:text-xl">Lørdag: <span>09:00 - 17:30</span></p>
      <p className="text-white md:text-xl">Søndag: <span>Stengt</span></p>

      </div>
    </div>
  );
}
