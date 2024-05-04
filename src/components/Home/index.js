import {Link} from 'react-router-dom'
import Header from '../Header'
import MeetContext from '../context/ReactContext'
import './index.css'

const Home = props => (
  <MeetContext.Consumer>
    {value => {
      const {name, topic} = value
      const headingText = name === '' ? 'Welcome to Meetup' : `Hello ${name}`
      const paraText =
        name === '' ? 'Please Register for the topic' : `Welcome to ${topic}`
      const isRigister = name === '' ? false : true
      return (
        <div className="MainPageContainer">
          <Header />
          <div className="HomeContainer">
            <h1 className="HomeHeading" isRigister={isRigister}>
              {headingText}
            </h1>
            <p className="HomePara" isRigister={isRigister}>
              {paraText}
            </p>
            {name === '' && (
              <Link to="/register">
                <button className="Button">Register</button>
              </Link>
            )}
            <img
              className="HomeImg"
              alt="meetup"
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            />
          </div>
        </div>
      )
    }}
  </MeetContext.Consumer>
)

export default Home
