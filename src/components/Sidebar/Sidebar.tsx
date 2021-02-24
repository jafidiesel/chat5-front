import React from 'react';
import Channels from '../Channels/Channels';
import ActionBox from '../ActionBox/ActionBox';
import './Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <Channels/>
      <ActionBox/>
    </div>
  );
}

export default Sidebar;
