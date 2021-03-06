import React, {Component} from 'react'
import Table from './Table'
import Form from './Api'
class App extends Component{

    state = {
        characters :[
            
        ]
    }

    handleSubmit =  character => {
        this.setState({characters: [...this.state.characters,character]})
    }

    removeCharacter = (index) => {
        const {characters} = this.state 
        this.setState(
            {
                characters: characters.filter((character, i) => {
                    return i !== index
                })
            }
        )
    }
  
    render(){
        const {characters} =  this.state
        return (
            <div className="App">
                    <center>
                        <h1>
                            Hello im akshay
                        </h1>
                    </center>
                    <br />
                    <br />
                   
                    <Table characters = {characters} removeCharacter = {this.removeCharacter}/>
                    <Form handleSubmit={this.handleSubmit}/>
                    
            </div>
        )
    }
}

export default App