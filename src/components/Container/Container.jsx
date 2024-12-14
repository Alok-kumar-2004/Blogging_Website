import React from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-7xl px-4 rounded-3xl'>{children}</div>
  )
}

export default Container