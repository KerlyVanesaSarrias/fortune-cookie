
import { useState } from 'react';
import './App.css'
import getRandomFromArray from './utils/getRandomFromArray'
import phrases from './utils/phrases.json'
import PhraseCard from './components/PhraseCard';
import ButtonPhrase from './components/ButtonPhrase';
import arrImages from './utils/arrImages.json'
import Author from './components/Author';

function App() {
  const initialPhrase = getRandomFromArray(phrases);
  const [phrasesRandom,setPhraseRandom] = useState(initialPhrase);

  const initialImages = getRandomFromArray(arrImages)
  const [imageSelected, setImageSelected] = useState(initialImages)

  const objStyle = {
    backgroundImage: `url('/fortuna-2/fondo${imageSelected}.png')`
  }
  return (
      <div className='app' style={objStyle}>
        <h1 className='app_tittle'>Galleta de la fortuna</h1>
        <article className='app_card'>
          <PhraseCard phraseRandom={phrasesRandom} />
          <ButtonPhrase
            setPhraseRandom={setPhraseRandom}
            setImageSelected={setImageSelected}/>
        </article>
        <Author/>
      </div>
    
  )
}

export default App
