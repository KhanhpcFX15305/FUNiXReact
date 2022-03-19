import './App.css';
import React, { Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import StaffList from './components/StaffListComponent';
import { STAFFS } from './shared/staffs';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      staffs : STAFFS
    }
  }
  render() {
    return (
      <div className="container">
        <Navbar dark color="primary">
          <NavbarBrand>
            Ứng dụng quản lý nhân viên V1.0
          </NavbarBrand>
        </Navbar>
        <StaffList staffs = {this.state.staffs} />
      </div>
    );
  }
}

export default App;
