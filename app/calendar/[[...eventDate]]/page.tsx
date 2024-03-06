import React from "react";

type Props = {
  params: { eventDate: string[] };
};

export default function page({ params }: Props) {
  let filter = "CURRENT_YEAR";
  const { eventDate } = params;
  if (eventDate?.length == 1) {
    filter = eventDate[0];
  } else if (eventDate?.length == 2) {
    filter = `${eventDate[1]}/${eventDate[0]}`;
  } else if (eventDate?.length == 3) {
    filter = `${eventDate[2]}/${eventDate[1]}/${eventDate[0]}`;
  }
  return <div>{filter}</div>;
}
