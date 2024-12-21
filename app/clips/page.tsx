"use client"

import { useEffect, useState } from "react";

export default function Page() {
  const fetchClips = async () => {
    const res = await fetch("api/clip");
    const clips = await res.json();
    return clips;
  };
  const [clips, setClips] = useState([]);

  useEffect(()=>{
    fetchClips().then((clips)=>{
        setClips(clips)
    })
  },[])


  return (
    <div>
        {clips.map((clip :any)=>(
            <h1 key={clip.type}>{clip.type}</h1>
        ))}
    </div>
  )
}
