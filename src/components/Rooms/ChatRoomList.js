import React from 'react';
import { Nav } from 'rsuite';
import RoomItem from './RoomItem';

export default function ChatRoomList({ aboveElmHeight }) {
  return (
    <Nav
      appearance="subtle"
      vertical
      reversed
      className="overflow-y-scroll custom-scroll"
      style={{
        height: `calc(100% - ${aboveElmHeight}px)`,
      }}
    >
      <Nav.Item>
        <RoomItem />
      </Nav.Item>
    </Nav>
  );
}
