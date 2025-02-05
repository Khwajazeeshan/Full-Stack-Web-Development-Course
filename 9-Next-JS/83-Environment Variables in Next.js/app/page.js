"use client"

export default function Home() {
  // this code is run on server side...
  // console.log("The id is", process.env.ID, "and the secres is", process.env.SECRET);

  return (
    <div>
      This is home page
      <br />

      {/* this code is run on server side... */}
      {/* The id is {process.env.ID} and the secres is { process.env.SECRET} */}

      {/* this code is run on Client side... */}
      The id is {process.env.NEXT_PUBLIC_ID} and the secres is {process.env.NEXT_PUBLIC_SECRET} and the name is {process.env.NEXT_PUBLIC_NAME}
      {/* Load order is
      1. .env.local
      2. .env
       */}
      
    </div>
  );
}
