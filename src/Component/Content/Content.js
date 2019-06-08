import React, { Component } from 'react';
import Footer from './Footer/Footer';
import TopBar from './TopBar/TopBar';
import PageContent from './PageContent/PageContent';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state={
      username:'qua',
      password:{
        name:'qua',
        accountName:'27/10/1997',
      },
      myname1:
      {
        lop:'12',
        daihoc:'4',
      }
    };
  }
changeState = ()=>{
  console.log('thaydoi state')
  this.setState({
    username:'qua1'
  })
}
    render() {
        return (
            <>
                 {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
          <TopBar myname1={this.state.myname1}></TopBar>
        {/* Begin Page Content */}
        <PageContent></PageContent>
        {/* /.container-fluid */}
      </div>
      {/* End of Main Content */}
      {/* Footer */}
    <Footer password={this.state.password}></Footer>
    <span onClick={this.changeState}>thaydoi state</span>
      {/* End of Footer */}
    </div>
    {/* End of Content Wrapper */}
            </>
        );
    }
}


export default Content;
