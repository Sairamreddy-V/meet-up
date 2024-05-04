import {useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import MeetContext from './components/context/ReactContext'
import NotFound from './components/NotFound'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
const App = () => {
  const [name, setname] = useState('')
  const [topic, setTopic] = useState('Arts and Culture')
  const onChangeName = event => {
    setname(event)
  }
  const onChangeTopic = event => {
    setTopic(event)
  }
  return (
    <MeetContext.Provider
      value={{
        name,
        topic,
        changeName: onChangeName,
        changeTopic: onChangeTopic,
      }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </MeetContext.Provider>
  )
}

export default App
