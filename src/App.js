import './App.css';
import React, { Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <NavbarBrand>
            Ứng dụng quản lý nhân viên V1.0
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default App;
