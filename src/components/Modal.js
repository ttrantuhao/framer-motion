import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const backdrop = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modal = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 200,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const Modal = ({ show, setShow }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="backdrop"
        >
          <motion.div className="modal" variants={modal}>
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Start again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
