import getRandomFromArray from '../utils/getRandomFromArray'
import phrases from '../utils/phrases.json'
import arrImage from '../utils/arrImages.json'
import './styles/BtnPhrase.css'

const BtnPhrase = ({ setPhraseRandom, setImageSelect }) => {

    const handleClick = () => {
       const phrase = getRandomFromArray(phrases)
       setPhraseRandom(phrase)

       const background = getRandomFromArray(arrImage)
       setImageSelect(background)

    }


  return (
    <button className='card__btn' onClick={handleClick}>Probar mi suerte</button>
  )
}

export default BtnPhrase