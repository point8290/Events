import { Metadata } from 'next';
import React from 'react'

type Props = {}

export const metadata: Metadata = {
  title: "Events",
};

export default function EventList({}: Props) {
  return (
    <div>Event List</div>
  )
}