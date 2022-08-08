import React, { Component } from 'react'
import HOC from '../components/shared/HOC'


type Props = {
    filteredData: any[]
}

type State = {
   
}

class Users extends Component<Props, State> {
  state = {
  }


  render() {
    return (
        <>

       
        {this.props.filteredData && this.props.filteredData.map((user) => <p key={user["id"]}>{user["name"]}</p>)}
        </>
      
    )
  }
}

const SearchUsers = HOC(Users, "users");

export default SearchUsers;