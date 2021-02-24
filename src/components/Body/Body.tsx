import React from 'react';
import HistoryChat from '../HistoryChat/HistoryChat';
import MessageBox from '../MessageBox/MessageBox';
import './Body.scss';

function Body() {
  return (
    <div className="body">
      <HistoryChat/>
      <MessageBox/>
    </div>
  );
}

export default Body;
