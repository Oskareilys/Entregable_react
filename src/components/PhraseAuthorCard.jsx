import './styles/PhraseAuthorCard.css'

const PhraseAuthorCard = ({ authorRandom }) => {
    
    const { author } = authorRandom

  return (
    <p className='card__author'>{author}</p>

  )
}

export default PhraseAuthorCard


