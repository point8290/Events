import SimilarEvents from '@/app/_components/SimilarEvents';
import React from 'react'




export default function EventDetailLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
    {children}
    <SimilarEvents />
    </>
  )
}