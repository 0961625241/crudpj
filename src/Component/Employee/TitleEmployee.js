import React, { Component } from 'react';

class TitleEmployee extends Component {
    showAddPoppup =()=>{
        this.props.propshow();
    }
    render() {
        return (
            <>
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Manage <b>Employees</b></h2>
                        </div>
                        <div className="col-sm-6">
                            <a href="#" onClick={()=>this.showAddPoppup()} className="btn btn-success" data-toggle="modal"><i className="material-icons"></i> <span>Add New Employee</span></a>
                            <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TitleEmployee;