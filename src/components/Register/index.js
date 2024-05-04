import {useState} from 'react'
import MeetContext from '../context/ReactContext'
import Header from '../Header'
import './index.css'

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

const Register = props => {
  const [showError, setShowError] = useState(false)
  return (
    <MeetContext.Consumer>
      {value => {
        const {name, changeName, changeTopic} = value

        const onNameChange = event => {
          changeName(event.target.value)
        }

        const onSlelectChange = event => {
          const id = event.target.value
          if (id === 'ARTS_AND_CULTURE') {
            changeTopic('Arts and Culture')
          } else if (id === 'CAREER_AND_BUSINESS') {
            changeTopic('Career and Business')
          } else if (id === 'EDUCATION_AND_LEARNING') {
            changeTopic('Education and Learning')
          } else if (id === 'FASHION_AND_BEAUTY') {
            changeTopic('Fashion and Learning')
          } else if (id === 'GAMES') {
            changeTopic('Games')
          }
        }

        const onRegister = event => {
          event.preventDefault()
          if (name === '') {
            setShowError(true)
          } else {
            const {history} = props
            history.replace('/')
          }
        }
        return (
          <div className="MainPageContainer">
            <Header />
            <div className="register-main-container">
              <div className="LoginContainer">
                <img
                  className="LoginImage"
                  alt="website register"
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                />
                <form className="LoginFormContainer" onSubmit={onRegister}>
                  <h1>Let us join</h1>
                  <div className="InputContainer">
                    <label htmlFor="name">NAME</label>
                    <input
                      className="Input"
                      onChange={onNameChange}
                      type="text"
                      placeholder="Your name"
                      value={name}
                    />
                  </div>
                  <div className="InputContainer">
                    <label htmlFor="topic">TOPIC</label>
                    <select
                      className="SelectElement"
                      id="topic"
                      onChange={onSlelectChange}
                    >
                      {topicsList.map(eachOne => (
                        <option
                          key={eachOne.id}
                          value={eachOne.id}
                          select={eachOne.id === 'ARTS_AND_CULTURE'}
                        >
                          {eachOne.displayText}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className="RegisterNowButton" type="submit">
                    Register Now
                  </button>
                  {showError === true && (
                    <p className="ErrorPara">Please Enter your name</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        )
      }}
    </MeetContext.Consumer>
  )
}

export default Register
