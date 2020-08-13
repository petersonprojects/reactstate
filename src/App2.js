import React, { Component } from 'react'

class App extends Component
{
  render()
  {

    let people = ["Dan", "Michael", "Micah", "Woody", "Jeremy", "Chris", "Cainan", "RJ"];


    return (
      <>

        <ul>
          {
            people.map((person, index)=> {
              return <li key={index}>{person}</li>
            })
          }
        </ul>

      </>
    )
  }
}

export default App

