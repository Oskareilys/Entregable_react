import getRandomFromArray from '../utils/getRandomFromArray'
import phrases from '../utils/phrases.json'
import arrImage from '../utils/arrImages.json'
import authors from '../utils/phrases.json'
import './styles/BtnPhrase.css'

const BtnPhrase = ({ setPhraseRandom, setAuthorRandom, setImageSelect }) => {

    const handleClick = () => {
       const phrase = getRandomFromArray(phrases)
       setPhraseRandom(phrase)
      //  setPhraseRandom(phrase.phrase)
      //  setAuthorRandom(phrase.author)
      const author = getRandomFromArray(authors)
      setAuthorRandom(author)

       const background = getRandomFromArray(arrImage)
       setImageSelect(background)

    }


  return (
    <button className='card__btn' onClick={handleClick}>Probar mi suerte</button>
  )
}

export default BtnPhrase