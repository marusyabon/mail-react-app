import React from 'react';

class Pagination extends React.PureComponent{

  state = {
      activePage: 1
  }

  handleSelect = (event, selectedEvent) => {
    this.setState({activePage:selectedEvent.eventKey});  
  }

  handlePress = (isArrowLeft) => {     
    let page = this.state.activePage;
    if (isArrowLeft) {
      page = page == 1 ? 1 : --page;       
    } else {
      page = page == this.props.itemsCount ? this.props.itemsCount : ++page;        
    }
    this.setState({activePage:page});
  }

  componentWillMount(){
    let that = this;
    key('⌘+left, ctrl+left', function(event, handler){      
      that.handlePress(true);
    });
    key('⌘+right, ctrl+right', function(event, handler){ 
      that.handlePress(false);      
     }); 
  }

  render() {    
    return (
      <div>
        <CitiesList data={this.props.data} activePage={this.state.activePage}/>
        <Pagination
          prev
          next        
          items={this.props.itemsCount}
          maxButtons={5}
          activePage={this.state.activePage}
          onSelect={this.handleSelect} />
      </div>
    );
  }
}

