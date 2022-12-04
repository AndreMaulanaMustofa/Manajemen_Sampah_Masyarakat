import React from 'react'

export default function Select({children ,...props}) {
  return (
   <select className="w-full text-indigo-500 border-gray-300 rounded-xl focus:ring-0" 
   {...props}>
    {children }
   </select>
  )
}
    