import React, { Component } from 'react';
import { Card, CardText, CardImg } from 'reactstrap';
import dateFormat from 'dateformat';
import { STAFFS } from '../shared/staffs';

class StaffList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            staffs : STAFFS,
            detailStaff : null
        }
    }
    detailStaff(nv) {
        this.setState({
            detailStaff : nv
        });
    }
    renderDetail(nv) {
        if (nv) {
            return (
                <Card>
                    <CardImg width="100%" src={nv.image} alt={nv.name} />
                    <CardText>Họ tên : {nv.name}</CardText>
                    <CardText>Ngày sinh : {dateFormat( nv.doB, "dd/mm/yyyy" )}</CardText>
                    <CardText>Ngày vào công ty : {dateFormat( nv.startDate, "dd/mm/yyyy")}</CardText>
                    <CardText>Phòng ban : {nv.department.name}</CardText>
                    <CardText>Số ngày nghỉ còn lại : {nv.annualLeave}</CardText> 
                    <CardText>Số ngày làm thêm : {nv.overTime}</CardText>
                </Card>
            )
        }
    }
    render() {
        var list = this.state.staffs.map((staff) => {
            return (
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <Card key={staff.id} onClick={() => {this.detailStaff(staff)}}>
                        <CardText>{staff.name}</CardText>
                    </Card>     
                </div>
            )
        });
        return (
        <div>
            <div className="row">
                {list}
            </div>
            <div className="row col-lg-4 col-xs-12">
                {this.renderDetail(this.state.detailStaff)}
            </div>
            
        </div>
        )
    }
}
export default StaffList