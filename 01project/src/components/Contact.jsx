import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import styles from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../HOC/index.js';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    messages: ""
  });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  // Corrected handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Corrected handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    // Form Validation
    if (!form.name || !form.email || !form.messages) {
      alert("Please fill all fields");
      setLoading(false);
      return;
    }
  
    // EmailJS Integration
    emailjs.send(
      "service_wh1dudh",
      "template_5cefa0y",
      {
        from_name: form.name,
        to_name: 'Shishir',
        from_email: form.email,
        to_email: "shishirtiwari138@gmail.com",
        message: form.messages,
      },
      "TcSM63YMeN9fnk8DZ"
    )
    .then(() => {
      setLoading(false);
      alert("Thanks for submitting the form!");
      setForm({
        name: '',
        email: '',
        messages: ''
      });
    })
    .catch((error) => {
      setLoading(false);
      console.error('EmailJS Error:', error);
      if (error && error.text) {
        console.error('EmailJS Error Text:', error.text);
      }
      alert("Something went wrong. Please try again later.");
    });
  };
  
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Form Section */}
        <form 
          ref={formRef} 
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type='text' 
              name='name' 
              value={form.name} 
              onChange={handleChange}
              placeholder='Enter your name' 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type='email' 
              name='email' 
              value={form.email} 
              onChange={handleChange}
              placeholder='Enter your email' 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Messages</span>
            <textarea 
              rows="7" 
              name='messages' 
              value={form.messages} 
              onChange={handleChange}
              placeholder='Enter your thoughts' 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          {/* Submit Button */}
          <button 
            type='submit' 
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      {/* Earth Canvas */}
      <motion.div 
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[555px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
