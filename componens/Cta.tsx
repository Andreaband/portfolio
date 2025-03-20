"use client";
import React from 'react'
import Link from 'next/link';

interface CtaProps {
    label: string,
    link: string,
    target?: "_blank" | "_self" | "_parent" | "_top" | "framename",
    className?: string,
    children?: React.ReactNode,
  }

  function Cta({ label, link, target = "_self", className, children }: CtaProps) {
    return (
      <Link href={link} target={target} className={`cta w-fit space-x-2 ${className ?? ""}`}>
        <span className='text-xl'>{label}</span>
        {children}
      </Link>
    )
  }

export default Cta
