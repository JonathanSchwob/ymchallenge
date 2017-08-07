import React from 'react';
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';

const AppBody = (props) => (
  <div style={{
    color: props.muiTheme.palette.textColor,
    margin: '0 auto',
    maxWidth: '500px',
    display: 'flex',
    position: 'relative',
    top: '100',
    backgroundColor: props.muiTheme.palette.primary1Color,
  }}>
    <TextField />
  </div>
);

export default muiThemeable()(AppBody);