import React from 'react'
type Props = {
    params:{
      eventId:string
      participantId:string
    }
  }

export default function Participant({params}: Props) {
  return (
    <div>Event {params.eventId} Participant {params.participantId}</div>
  )
}