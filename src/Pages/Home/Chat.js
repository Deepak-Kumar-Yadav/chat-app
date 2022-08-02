import React from 'react';
import { useParams } from 'react-router';
import { Loader } from 'rsuite';
import Bottom from '../../components/Chat-Window/bottom';
import Messages from '../../components/Chat-Window/messages';
import Top from '../../components/Chat-Window/top';
import { useRooms } from '../../Context/Rooms.context';

export default function Chat() {
  const { chatId } = useParams();
  const rooms = useRooms();
  if (!rooms) {
    return <Loader center vertical size="md" content="Loading" speed="slow" />;
  }
  const currentRoom = rooms.find(room => room.id === chatId);
  if (!currentRoom) {
    return <h6 className="text-center mt-page">Chat {chatId} not found</h6>;
  }
  return (
    <>
      <div className="chat-top">
        <Top></Top>
      </div>
      <div className="chat-middle">
        <Messages></Messages>
      </div>
      <div className="chat-bottom">
        <Bottom></Bottom>
      </div>
    </>
  );
}
