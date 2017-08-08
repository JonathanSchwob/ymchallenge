  import React from 'react';
  import AppBar from 'material-ui/AppBar';
  import Drawer from 'material-ui/Drawer';
  import MenuItem from 'material-ui/MenuItem';



  const Todos = (props) => (
    <div>
      <Drawer width={200} openSecondary={true} open={props.open} >
        <AppBar title="Tasks" onLeftIconButtonTouchTap={props.handleToggleDrawer}/>
        <MenuItem onTouchTap={this.logProps}>Menu Item</MenuItem>
        <MenuItem onTouchTap={this.logProps}>Menu Item 2</MenuItem>
      </Drawer>
    </div>
  );

  export default Todos;