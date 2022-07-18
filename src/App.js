import React from 'react'
import Reviews from './components/Reviews'
import Story from './components/Story'
import Nav from './nav/Nav'

function App() {
  return (
    <div style={{scrollBehavior: "smooth", fontFamily: "Comic Sans MS"}}>
			<Nav />
			<Story />
			<Reviews />
			<footer style={{textAlign: "center"}}><b>Gyoogh</b> 2022 all rights reserved.</footer>
    </div>
  )
}

export default App