<<<<<<< HEAD
import React from 'react';

export default function Top() {
  return <div>top</div>;
}
=======
import React, { memo } from 'react';
import { useCurrentRoom } from '../../../Context/current-room.context';

export default memo(function Top() {
  const name = useCurrentRoom(v => v.name);
  return <div>{name}</div>;
});
>>>>>>> 6f492d8357c5b0e31621c0cdc61b1064cf61602f
