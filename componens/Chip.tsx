import React from 'react'

interface ChipProps {
  label: string,
}
function Chip({ label }: ChipProps) {
  return (
    <div className='flex justify-center items-center rounded-[64px] border-accent-blue border-2 px-8 py-2'>
      <span className='text-accent-blue font-title'>{label}</span>
    </div>
  )
}

export default Chip