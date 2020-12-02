import React, {Component} from 'react'

import {CardList}  from './component/card-list/card-list.component'
import {SearchBox} from './component/search-box/seacrh-box.component'

import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state = {
            users:[],
            searchField: '',
        }
    }
    
    changeState = (event) => {
        event.preventDefault();
        this.setState({searchField: event.target.value})
    }

    filterUser(){
        const {users, searchField} = this.state;
        const filterUsers = users.filter(
            user => user.username.toLowerCase().includes(searchField.toLowerCase())
        );
        return filterUsers;
    }
    componentDidMount(){
        async function Respond() {
            let data = await fetch(`https://jsonplaceholder.typicode.com/users`);
            if(!data.ok){
                throw new Error(`HTTP Error Respond: ${data.status}`);
            }else{
                let user = data.json();
                return user;
            }
        }
        Respond().then(user => {
            this.setState({users: user})
        }).catch(err => console.log(err));
    }
    componentDidUpdate(){
        // console.log(this.state)
    }

    render(){
        // console.log(this.filterUser())
        return(
            <div className="App">
                <SearchBox
                    placeholder="Search User"
                    onChange={this.changeState}
                />
                <CardList users={this.filterUser()} />
            </div>
        )
    }
}

export default App;
