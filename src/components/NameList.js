import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        { 
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React',
        },
        {
            id: 2,
            name: 'Clack',
            age: 20,
            skill: 'Angular', 
        },
        {
            id:3,
            name: 'Diana',
            age: 25,
            skill: 'Vue'
        }
    ]        

    const personList = persons.map(person =>  
        (
            <Person key={person.id} person={person}/>
        )
        )
    return (
        <div>{personList}</div> 
        // <div>
        //    {
        //        names.map((name, index)=> <h3>{name}</h3>)
        //    }

        //    <h2>{names[0]}</h2>
        //    <h2>{names[1]}</h2>
        //    <h2>{names[2]}</h2> 
        // </div> 
    )
}

export default NameList
