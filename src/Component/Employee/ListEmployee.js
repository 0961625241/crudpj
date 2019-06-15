import React, { Component } from 'react';

import TitleEmployee from './TitleEmployee';
import TableEmployee from './TableEmployee/TableEmployee';

class ListEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showadd: false,
      showedit: false,
      employeeArr: [
        {
          name: 'Thomas Hardy',
          mail: 'thomashardy@mail.com',
          address: '89 Chiaroscuro Rd, Portland, USA',
          phone: '(171) 555-2222'
        },
        {
          name: 'Dominique Perrier',
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
  showAddPoppup = () => {
    this.setState({
      showadd: true
    })
  }
  CloseAddPoppup = () => {
    this.setState({
      showadd: false
    })
  }
  showEditPoppup = () => {
    this.setState({
      showedit: true
    })
  }
  CloseEditPoppup = () => {
    this.setState({
      showedit: false
    })
  }
  addTest=()=>{
    console.log('add')
     // lay state cu
     let newEmployeeArr=this.state.employeeArr;

     // them object  moi vao state cu
     let newObject ={
       name: 'Thomas Hardy',
       mail: 'thomashardy@mail.com',
       address: '89 Chiaroscuro Rd, Portland, USA',
       phone: '(171) 555-2222'
     }
     newEmployeeArr.push(newObject)
     // set state = state moi
     this.setState({
       employeeArr:newEmployeeArr
     })
  }
  render() {
    return (
      <>
        <button onClick={()=>this.addTest()}>TEST ADD</button>

        <div>
          <div className="container">
            <div className="table-wrapper">
              <TitleEmployee propshow={this.showAddPoppup}></TitleEmployee>
              <TableEmployee showAddPoppup_Table={this.showEditPoppup} employeeArr_prop={this.state.employeeArr} ></TableEmployee>

            </div>
          </div>
          {/* Edit Modal HTML */}
          {this.state.showadd === true ?
            <div id="addEmployeeModal" className="">
              <div className="modal-dialog">
                <div className="modal-content">
                  <form>
                    <div className="modal-header">
                      <h4 className="modal-title">Add Employee</h4>
                      <button onClick={() => this.CloseAddPoppup()} type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <textarea className="form-control" required defaultValue={""} />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control" required />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                      <input type="submit" className="btn btn-success" defaultValue="Add" />
                    </div>
                  </form>
                </div>
              </div>
            </div> :
            ''
          }


          {/* Edit Modal HTML */}
          {this.state.showedit === true ?

            <div id="editEmployeeModal" className="">
              <div className="modal-dialog">
                <div className="modal-content">
                  <form>
                    <div className="modal-header">
                      <h4 className="modal-title">Edit Employee</h4>
                      <button onClick={() => this.CloseEditPoppup()} type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <textarea className="form-control" required defaultValue={""} />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control" required />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                      <input type="submit" className="btn btn-info" defaultValue="Save" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            : ''
          }
          {/* Delete Modal HTML */}
          <div id="deleteEmployeeModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Delete Employee</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  </div>
                  <div className="modal-body">
                    <p>Are you sure you want to delete these Records?</p>
                    <p className="text-warning"><small>This action cannot be undone.</small></p>
                  </div>
                  <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                    <input type="submit" className="btn btn-danger" defaultValue="Delete" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}



export default ListEmployee;


