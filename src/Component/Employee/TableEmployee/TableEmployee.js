import React, { Component } from 'react';
import EmployeeRow from './EmployeeRow';

class TableEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      employeeArr: [
        {
          name: 'qua',
          mail: 'thomashardy@mail.com',
          address: '89 Chiaroscuro Rd, Portland, USA',
          phone: '(171) 555-2222'
        },
        {
          name: 'duong xuan qua',
          mail: 'dominiqueperrier@mail.com',
          address: '89 Chiaroscuro Rd, Portland, USA',
          phone: '(171) 555-2222'
        },
        {
          name: 'Maria Anders',
          mail: 'thomashardy@mail.com',
          address: '25, rue Lauriston, Paris, France',
          phone: '(171) 555-2222'
        }
      ]

    }

   

    
    
  }
  // showEditPopup_ComponentTable = () =>{
  //   this.props.showAddPoppup_Table()
    
  // }
  
  render() {
    
   
    
    return (
      <>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>
                <span className="custom-checkbox">
                  <input type="checkbox" id="selectAll" />
                  <label htmlFor="selectAll" />
                </span>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
            {this.props.employeeArr_prop.map((item,index)=>{
              return <EmployeeRow _showedit={this.props.showAddPoppup_Table} key={'employee' + index} Employeeinfo={item}></EmployeeRow>
            })}
            
           
          </tbody>
        </table>
      </>
    );
  }
}

export default TableEmployee;

