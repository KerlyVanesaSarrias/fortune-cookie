
import getRandomFromArray from '../utils/getRandomFromArray'
import phrases from '../utils/phrases.json'
import arrImages from '../utils/arrImages.json'
import './styles/ButtonPhrase.css'

const ButtonPhrase = ({setPhraseRandom, setImageSelected}) => {
    const handleClick = () => {
        const changePhrase = getRandomFromArray(phrases)
        setPhraseRandom(changePhrase)
    
        const changeImage = getRandomFromArray(arrImages)
        setImageSelected(changeImage)
    }
    return (
        <button className='card_button' onClick={handleClick}>Probar mi suerte</button>
    )
}

export default ButtonPhrase