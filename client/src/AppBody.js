import React from 'react';
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';

const AppBody = (props) => (
  <div style={{
    color: props.muiTheme.palette.textColor,
    width: '35%',
    margin: '0 auto',
    backgroundColor: props.muiTheme.palette.primary1Color,
  }}>
    <TextField />
  </div>
);

export default muiThemeable()(AppBody);