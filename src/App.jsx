import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import authors from './utils/phrases.json'
import getRandomFromArray from './utils/getRandomFromArray'
import PhraseCard from './components/PhraseCard'
import BtnPhrase from './components/BtnPhrase'
import arrImage from './utils/arrImages.json'
import PhraseAuthorCard from './components/PhraseAuthorCard'


function App() {

  const initialValue = getRandomFromArray(phrases)
  // console.log(initialValue.phrase)
  // console.log(initialValue.author)
  const [phraseRandom, setPhraseRandom] = useState(initialValue)

  const initialValue2 = getRandomFromArray(authors)
  const [authorRandom, setAuthorRandom] = useState(initialValue.author)

  const initialImage = getRandomFromArray(arrImage)
  const [imageSelect, setImageSelect] = useState(initialImage)

  const objStyle = {
    backgroundImage: `url("/fondo${imageSelect}.png")`
  }


  return (
        <div className='app' style={objStyle}>
          <h1 className='app__tittle'>Galleta de la fortuna</h1>
          <article className='app__card'>
          <PhraseCard phraseRandom={phraseRandom} />
          <PhraseAuthorCard authorRandom={authorRandom}/>
          <BtnPhrase 
          setPhraseRandom={setPhraseRandom}
          setImageSelect={setImageSelect}
          setAuthorRandom={setAuthorRandom}
           />
           </article>
        </div>
       
  )
}

export default App
