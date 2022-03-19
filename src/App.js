import './App.css';
import React, { Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './components/StaffListComponent'

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Navbar dark color="primary">
          <NavbarBrand>
            Ứng dụng quản lý nhân viên V1.0
          </NavbarBrand>
        </Navbar>
        <StaffList />
      </div>
    );
  }
}

export default App;
