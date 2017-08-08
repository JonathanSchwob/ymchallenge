import React from 'react';
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {blue500} from 'material-ui/styles/colors';


const styles = {
  floatingLabelFocusStyle: {
    color: blue500,
  },
};

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
    <TextField
      floatingLabelText="Enter a task"
      floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      value={props.text}
      onChange={props.handleChangeTextField}
      onKeyPress={(ev) => {
        console.log(`Pressed keyCode ${ev.key}`);
        if (ev.key === 'Enter') {
          props.openDatePicker();
          ev.preventDefault();
        }
      }}
    />
  </div>
);

export default muiThemeable()(AppBody);