import React from 'react'
import { Metadata } from 'next';

export const generateMetadata = async({params}:Props): Promise<Metadata> => {

 const title= await new Promise((resolve,reject) => {

    resolve(`Event ${params.eventId}`)

  })

  return {
    title:`${title}`
  }

}

type Props = {
  params:{
    eventId:string
  }
}

export default function Event({params}:Props) {
  return (
    <div>Event {params.eventId}</div>
  )
}

//1400-A9Z1-17812