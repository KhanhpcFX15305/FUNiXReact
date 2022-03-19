import React, { Component } from 'react';
import { Card, CardText, CardBody } from 'reactstrap';
import dateFormat from 'dateformat';
import { STAFFS } from '../shared/staffs';

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nhanvien : STAFFS
        }
    }


    render() {
        var list = this.state.nhanvien.map((staff) => {
            console.log(staff);
            return (
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <Card>
                        <CardText>{staff.name}</CardText>
                    </Card>     
                </div>
            )
        });
        return (
            <div className="row">
                {list}
            </div>
        )
    }
}


export default StaffList