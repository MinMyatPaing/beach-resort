import React from "react";

import { withRoomContext } from "../../context";
import Loading from "../Loading/Loading";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

const RoomContainer = ({ context }) => {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <React.Fragment>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </React.Fragment>
  );
};

export default withRoomContext(RoomContainer);
