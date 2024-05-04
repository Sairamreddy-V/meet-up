import React from 'react'

const MeetContext = React.createContext({
  name: '',
  topic:"",
  changeName: () => {},
  changeTopic: () => {},
})

export default MeetContext
