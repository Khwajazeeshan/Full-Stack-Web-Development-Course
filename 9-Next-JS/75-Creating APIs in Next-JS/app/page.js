"use client";

export default function Home() {

  const handle = async () => {
    let data = {
      name: "John",
      role: "coder"
    }
    const a = await fetch("/API/add", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
    const res = await a.json()
    console.log(res);

  }
  return (
    <div>
      <h1 className="text-xl">APIs Routes in Next JS...</h1>
      <button onClick={handle}>Click me</button>
    </div>
  );
}
