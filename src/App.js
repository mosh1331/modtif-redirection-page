import React from 'react'
import { motion } from 'framer-motion'

export default function RedirectPage () {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-neutral-100 text-center p-6'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='max-w-md w-full'
      >
        <h1 className='text-3xl md:text-5xl font-semibold text-gray-900 mb-2 tracking-tight'>
          Modtif Modest Wears
        </h1>
        <p className='text-gray-600 mb-8 text-base md:text-lg'>
          Elegance. Grace. Confidence.
        </p>

        <div className='flex flex-col gap-4'>
          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-black text-white py-3 rounded-2xl text-lg font-medium shadow-md hover:bg-neutral-800 transition'
          >
            {/* Visit Our Website */}
            Website (Coming soon)
          </a>

          <a
            href='https://www.instagram.com/modtif.store?igsh=MXhiMXBrc21jMzd4cg=='
            target='_blank'
            rel='noopener noreferrer'
            className='border border-gray-800 text-gray-900 py-3 rounded-2xl text-lg font-medium hover:bg-gray-100 transition'
          >
            Instagram
          </a>
        </div>

        <p className='text-sm text-gray-400 mt-8'>
          © {new Date().getFullYear()} Modtif Modest Wears
        </p>
      </motion.div>
    </div>
  )
}
