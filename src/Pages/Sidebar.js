import React, { useEffect, useRef, useState } from 'react';
import CreateRoomBtnModal from '../components/CreateRoomBtnModal';
import DashboardToggle from '../components/Dashboard/DashboardToggle';
import ChatRoomList from '../components/Rooms/ChatRoomList';

export default function Sidebar() {
  const topSidebarRef = useRef();
  const [height, setHeight] = useState(null);

  useEffect(() => {
    if (topSidebarRef.current) {
      setHeight(topSidebarRef.current.scrollHeight);
    }
  }, [topSidebarRef]);

  return (
    <div className="h-100">
      <div className="pt-2" ref={topSidebarRef}>
        <DashboardToggle />
        <CreateRoomBtnModal />
        <div className="d-flex justify-content-center align-items-center pt-4 pb-4">
          -----Join Conversations-----
        </div>
      </div>
      <ChatRoomList aboveElmHeight={height} />
    </div>
  );
}
