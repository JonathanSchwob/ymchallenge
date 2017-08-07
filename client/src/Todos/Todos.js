import React from 'react';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import muiThemeable from 'material-ui/styles/muiThemeable';

const Todos = (props) => (
  <AppBar title="Tasks" style={{
    display: 'flex',
    maxWidth: '350px',
    position: 'absolute',
    right: '0',
    left: '0',
    top: '65'
  }}/>
);

export default muiThemeable()(Todos);