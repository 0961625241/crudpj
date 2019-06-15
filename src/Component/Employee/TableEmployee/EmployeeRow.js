import React, { Component } from 'react';

class EmployeeRow extends Component {
    constructor(props) {
        super(props);}

    showEditPoppup=()=>{
     this.props._showedit()
    }
    render() {
        return (
            <>
               <tr>
            <td>
              <span className="custom-checkbox">
                <input type="checkbox" id="checkbox1" name="options[]" defaultValue={1} />
                <label htmlFor="checkbox1" />
              </span>
            </td>
            <td>{this.props.Employeeinfo.name}</td>
            <td>{this.props.Employeeinfo.mail}</td>
            <td>{this.props.Employeeinfo.address}</td>
            <td>{this.props.Employeeinfo.phone}</td>
            <td>
              <a onClick={()=>this.showEditPoppup()} href="#" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"></i></a>
              <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"></i></a>
            </td>
          </tr>  
            </>
        );
    }
}

export default EmployeeRow;