export default function Home() {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">Hi, I'm Dustin — a Developer</h1>
      <p className="mt-4">I create modern web applications using MERN stack.</p>
      <a
        href="/assets/Garcia_Resume.pdf"
        download
        className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        Download Resume
      </a>
    </div>
  );
}
