import './styles/PhraseAuthorCard.css'

const PhraseAuthorCard = ({ phraseRandom }) => {
    
    const { author } = phraseRandom

  return (
    <p className='card__author'>{author}</p>

  )
}

export default PhraseAuthorCard


