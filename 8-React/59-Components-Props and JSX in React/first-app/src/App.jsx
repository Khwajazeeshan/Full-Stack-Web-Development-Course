import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/Card"


function App() {

  return (
    <>
      <Navbar />
      <Footer />
      <div className="flex-box">
        <Card title="card 1" />
        <Card title="card 2" />
        <Card title="card 3" />
        <Card title="card 4" />
        <Card title="card 5" />
      </div>

    </>
  )
}

export default App