import MatchCard from "./components/MatchCard"
import mockData from "./mockData.json"
import "./App.css"

function App() {
  return (
    <div className="app">
      {mockData.map((match) => (
        <MatchCard key={match.id} thumbnail={match.thumbnail} dateTime={match.dateTime} />
      ))}
    </div>
  )
}

export default App
