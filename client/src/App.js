import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import List from 'material-ui/svg-icons/action/list';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import Todos from './Todos/Todos';
import AppBody from './AppBody';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Mike',
      toggleDrawer: false,
      textField: '',
      todos: []
    };

    this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
    this.handleChangeTextField = this.handleChangeTextField.bind(this);
    this.openDatePicker = this.openDatePicker.bind(this);
  }

  handleToggleDrawer() {
    this.setState({toggleDrawer: !this.state.toggleDrawer});
  }

  handleChangeTextField(event) {
    this.setState({textField: event.target.value});
  }

  openDatePicker() {
    console.log('WWQOPEJQPWEQPWJE open sesame');
  }

  render() {
    return (
      <MuiThemeProvider>
      <div>
        {this.state.toggleDrawer ? <Todos handleToggleDrawer={this.handleToggleDrawer} open={this.state.toggleDrawer}/> : undefined}
        <AppBar 
          title={this.state.user} 
          onRightIconButtonTouchTap={this.handleToggleDrawer}
          iconElementLeft={<IconButton><ViewModule></ViewModule></IconButton>}
          iconElementRight={<IconButton><List></List></IconButton>}>
        </AppBar>
        <AppBody openDatePicker={this.openDatePicker} handleChangeTextField={this.handleChangeTextField} text={this.state.textField}/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
