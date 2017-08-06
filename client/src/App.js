import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import List from 'material-ui/svg-icons/action/list';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import './App.css';
import Todos from './Todos/Todos';
import AppBody from './AppBody';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 'Mike',
      renderTodos: false,
    };

    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  handleTouchTap() {
    this.setState({renderTodos: !this.state.renderTodos});
  }

  render() {
    return (
      <MuiThemeProvider>
      <div>
        {this.state.renderTodos ? <Todos /> : undefined}
        <AppBar 
        title={this.state.user} 
        onRightIconButtonTouchTap={this.handleTouchTap}
        iconElementLeft={<IconButton><ViewModule></ViewModule></IconButton>}
        iconElementRight={<IconButton><List></List></IconButton>}
        style={{
          width: '35%',
          margin: '0 auto',
        }}>
        </AppBar>
        <AppBody />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
