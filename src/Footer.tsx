import LastImg from './three_pepsi.png'
import { motion } from 'motion/react'
export default function FooterC() {
  return (
    <div className=' pb-10 pt-4'>
      <motion.div
        initial={{ x: "-140px" }}
        viewport={{ once: true }}
        whileInView={{ x: 0 }}

        transition={{ duration: 0.5 }}
        className='flex justify-center items-center  bg-famber-400'
      >
        <img className='w-25' src={LastImg} alt="three pepsi" />
      </motion.div>
    </div>
  )
}