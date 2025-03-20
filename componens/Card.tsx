import Image, { StaticImageData } from 'next/image'
import React from 'react'
import Cta from './Cta'
import LinkIcon from "@/assets/icons/link.svg";

interface CardProps {
  title: string,
  description: string,
  image: StaticImageData,
  link: string,
}
function Card({ title, description, image, link }: CardProps) {
  return (
    <div className='flex flex-col bg-foreground rounded-2xl max-w-[280px] overflow-hidden'>
      <Image
        alt={title}
        src={image}
        className='object-cover w-full h-[150px] p-1 rounded-2xl'
      />
      <div className='flex flex-col px-6 py-4 gap-4 h-full'>
        <h3 className='font-title text-xl !font-bold text-background'>{title}</h3>
        <p className='font-text !text-background'>{description}</p>
        <Cta label='Scopri di più' link={link} target='_blank' className='mt-auto'>
        </Cta>
      </div>
    </div>
  )
}

export default Card