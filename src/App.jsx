import './App.css'
import Card from "./components/card/Card"

const App = () => {
  return (
    <div className="app-conntainer">
      <Card name="Balamurugan" email="bala@example.com" btnName="Btn1" />
      <Card name="Arun Kumar" email="arun@example.com" btnName="Btn2" />
      <Card name="Diwakar" email="diwkk@example.com" btnName="Btn3" />
    </div>
  )
}

export default App
