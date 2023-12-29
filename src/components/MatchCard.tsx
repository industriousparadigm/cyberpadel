import "./MatchCard.css"

interface MatchCardProps {
  thumbnail: string
  dateTime: string
}

const MatchCard: React.FC<MatchCardProps> = ({ thumbnail, dateTime }) => {
  return (
    <div className="match-card">
      <img src={thumbnail} alt="Match Thumbnail" className="match-thumbnail" />
      <p className="match-date">{new Date(dateTime).toLocaleString()}</p>
    </div>
  )
}

export default MatchCard
