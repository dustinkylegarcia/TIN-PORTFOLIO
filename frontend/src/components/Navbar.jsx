import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="font-bold text-xl">Dustin</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <a href="/src/assets/resume.pdf" download className="ml-4 px-3 py-1 border rounded">Resume</a>
        </div>
      </div>
    </nav>
  )
}