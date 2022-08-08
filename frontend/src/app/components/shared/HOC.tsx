import React from "react";
import { Form } from "react-bootstrap";
import axios from 'axios';

type Props = {
  component: React.Component;
  entity: string;
};

type State = {
  filteredUsers: any[];
  users: any[];
  term: string;
};



const HOC = (WrappedComponent: any, entity: string) => {
  return  class extends React.Component<Props, State> {
    state = {
      filteredUsers: [],
      users: [],
      term: ""
    };

    onChangeHandler(e: React.ChangeEvent<HTMLInputElement>){
        const searchTerm = e.target.value;
        if(searchTerm){
         this.setState({...this.state, filteredUsers: this.state.users.filter((user) => (user["name"] as string).includes(searchTerm)), term: searchTerm})
        } else {
         this.setState({...this.state, filteredUsers: this.state.users, term: searchTerm})
        }
        
        
       }

       async componentDidMount(){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${entity}`);
        this.setState({...this.state, users: response.data, filteredUsers: response.data});
     }

    render(): React.ReactNode {
      return (
        <>
          <h2 className="mt-5">{entity}</h2>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                onChange={this.onChangeHandler.bind(this)}
              ></Form.Control>
            </Form.Group>
          </Form>

          <WrappedComponent
            filteredData={this.state.filteredUsers}
          ></WrappedComponent>
        </>
      );
    }
  };
};

export default HOC;
