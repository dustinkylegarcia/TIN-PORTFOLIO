export default function Contact() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <form className="mt-4 space-y-4 max-w-md">
        <input type="text" placeholder="Name" className="border w-full p-2 rounded" />
        <input type="email" placeholder="Email" className="border w-full p-2 rounded" />
        <textarea placeholder="Message" className="border w-full p-2 rounded"></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}
