import React, { useState } from 'react'
import axios from 'axios'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault();
    try{
      const res = await axios.post((import.meta.env.VITE_API_URL || 'http://localhost:5000') + '/api/messages', form)
      setStatus('Message sent — thanks!')
      setForm({ name:'', email:'', message:'' })
    }catch(err){
      setStatus('Failed to send — try again later.')
    }
  }

  return (
    <section className="max-w-lg">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      {status && <div className="mb-4 p-3 bg-green-100 rounded">{status}</div>}
      <form onSubmit={submit} className="space-y-3 bg-white p-4 rounded shadow">
        <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" className="w-full p-2 border rounded" />
        <input name="email" value={form.email} onChange={handleChange} required placeholder="Email" className="w-full p-2 border rounded" />
        <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Message" className="w-full p-2 border rounded" rows="5" />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded">Send</button>
      </form>
    </section>
  )
}