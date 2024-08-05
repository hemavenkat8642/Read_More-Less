import {useState, useEffect} from 'react'
import {Heading} from './styledComponents'

// Write your code here
const ReadMore = props => {
  const [readMore, setReadMore] = useState(false)
  const [text, setText] = useState('')
  const {reactHooksDescription} = props

  useEffect(() => {
    if (readMore) {
      setText(reactHooksDescription)
    } else {
      setText(reactHooksDescription.slice(0, 170))
    }
  }, [readMore, reactHooksDescription])

  return (
    <div>
      <Heading>React Hooks</Heading>
      <p>Hooks are a new addition to React</p>
      <img
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
        style={{width: '500px', height: 'auto'}}
      />
      <p>{text}</p>
      <button type="button" onClick={() => setReadMore(prev => !prev)}>
        {readMore ? 'Read Less' : 'Read More'}
      </button>
    </div>
  )
}

export default ReadMore
