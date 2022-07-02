import React from 'react'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <div>Contact</div>
    </motion.div>
  )
}

export default Contact