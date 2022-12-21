import React,{useState} from 'react';
import './Navigation.scss';
import {FaBars} from 'react-icons/fa';
import {motion} from 'framer-motion';
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  return (
    <>
    <motion.div animate={{width: isOpen ? "200px": "45px"}} className='Navigation-container'>
      <h2><FaBars onClick={toggle} /></h2>
    </motion.div>
    
    </>
  )
}

export default Navigation