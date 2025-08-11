import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Projects(){
  const [projects, setProjects] = useState([])
  useEffect(()=>{
    axios.get((import.meta.env.VITE_API_URL || 'http://localhost:5000') + '/api/projects')
      .then(r=>setProjects(r.data))
      .catch(()=>setProjects([]))
  },[])

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.length===0 && <div className="p-6 bg-white rounded shadow">No projects yet — add some in the server DB.</div>}
        {projects.map(p=> (
          <div key={p._id} className="p-4 bg-white rounded shadow">
            <h3 className="font-bold">{p.title}</h3>
            <p className="text-sm mt-2">{p.description}</p>
            {p.link && <a className="text-indigo-600 block mt-2" href={p.link} target="_blank" rel="noreferrer">Open project</a>}
          </div>
        ))}
      </div>
    </section>
  )
}