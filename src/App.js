import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Select from 'react-select';
import List from './List';
import axios from 'axios';

const FilterOptions = [{label: "The movie the character appeared in in Episode IV: A New Hope", value: 1},
{label: "The character's species which are human", value: 2},
{label: "A range of years that the character's birth year falls in between 30 BBY and 5 ABY", value: 3}];

class App extends React.Component {
  constructor(){
    super();
    this.state={people:[], }
    //this.onClick=this.onClick.bind(this);
    this.getPeople = this.getPeople.bind(this);
    
  }
  

  // componentDidMount(){
  //   fetch( 'https://swapi.co/api/people')
  //   .then(response => response.json())
  //   .then( ({results: people})=> this.setState({people}))
  // }
  getPeople(){
    return axios.get("https://swapi.co/api/people")
    .then((response)=> {
      console.log(response.data.results);
      this.setState({people: response.data.results})
    })
  }

  
  componentDidMount(){
    this.getPeople()
  }
  

  render(){
    // let items = this.state.people;
    const {people}=this.state;
    // const nameList = items.map(name =>{
    //   return (
    //     <li key={name.name}>{name.name}</li>
    //   )
    // })

     
    


    return (
      <div>
      <List people=  {people} />
      <Select options ={FilterOptions}/>
      </div>
      
    )
  }
}
export default App;
