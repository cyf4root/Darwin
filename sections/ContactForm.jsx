import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import EarthCanvas from "../components/EarthCanvas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from '../styles';


const ContactForm = () => {
  const form = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();
  const messageInput = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      nameInput.current.value === "" ||
      emailInput.current.value === "" ||
      messageInput.current.value === ""||
      phoneInput.current.value ===""
    ) {
      toast.error("Please fill in all the fields", {
        position: toast.POSITION.BOTTOM_RIGHT, 
        autoClose: 1000,
        style: {
          background: 'black',
          color: 'white', 
        },
      });
      return;
    }

    setIsSubmitting(true); 

    emailjs.sendForm(
      "service_t7nhdnc",
      "template_nmk19jy",
      form.current,
      "85aZ1WIXJ0D2dAZ7x"
    ).then(
      (result) => {
        console.log(result.text);
        console.log("message sent");

        toast.success("sent successfully!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
          style: {
            background: 'black',
            color: 'white', 
          },
        });

        form.current.reset();
        setIsSubmitting(false); 
        setMessageSent(true);
        setTimeout(() => {
          setMessageSent(false);
        }, 5000);
      },
      (error) => {
        console.log(error.text);
        setIsSubmitting(false); 
      }
    );
  };

  return (
    <div   className={`${styles.paddings}`}
    >
      <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-5/12 md:px-3 lg:px-6">
          <div className='canvas sm:h-[400px] h-[340px]'>
          <h1 className="text-white opacity-70 sm:inline	 hidden text-[12px] ">Hate form-filling &nbsp;&nbsp;<a className="text-[#27ae60]" href="mailto: darwinmedia.work@gmail.com"> Shoot us!</a></h1>

                      <EarthCanvas/>
          </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6 ">
            <h1 className="projectt text-white sm:text-[40px] text-[30px]">
              Tell us About Your <br />
              <span className="riott text-[25px] sm:text-[25px]">
                project!!
              </span>
            </h1>
            
            <form ref={form} onSubmit={sendEmail}>
              <div className="relative mb-6" >
                <input
                ref={nameInput}
                  type="text"
                  className="peer placeholder-white::placeholder field block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary :placeholder:opacity-1"
                  name="user_name"
                  placeholder="Name"
                />
                
              </div>
              <div className="relative mb-6" >
                <input
                 ref={phoneInput}
                  type="text"
                  className="peer field block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary:placeholder:opacity-1"
                  id="phone"
                  placeholder="Phone"
                />
               
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                ref={emailInput}
                  type="email"
                  className="peer field block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary "
                  name="user_email"
                  placeholder="Email address"
                />
                
              </div>
              <div className="relative mb-6">
                <textarea
                  className="peer field block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 "
                  name="message"
                  ref={messageInput}
                  rows="3"
                  placeholder="Tell US"
                ></textarea>
               
              </div>
              
              <input
                type="submit"
                className="mb-6 inline-block btn w-[20vh]  sm:w-[50vh] rounded bg-primary px-6 pt-2.5 pb-2 text-[20px] font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                value={isSubmitting ? "...." : "Submit!"} 
                disabled={isSubmitting} 
              />

            </form>
            <h1 className="text-white opacity-70 sm:hidden inline text-[12px] ">Hate form-filling &nbsp;&nbsp;<a className="text-[#27ae60]" href="mailto: darwinmedia.work@gmail.com"> Shoot us!</a></h1>

          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
    
    </div>
    
    
  );
};

export default ContactForm;
