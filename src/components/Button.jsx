import React from 'react'

const Button = ({styles}) => (
    <button type='button' className={`py-4 px-6 bg-pink-gradient font-poppins font-medium text-[18px] text-white outline-none ${styles} rounded-[10px]`}>
      Get Started
    </button>
  )

export default Button