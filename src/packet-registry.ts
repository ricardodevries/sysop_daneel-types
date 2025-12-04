import { SocketEvent } from "./events/socket.events";
import {
  BanUserData,
  ChatMessageData,
  CheerData,
  DeletedChatMessageData,
  DropEmoteData,
  DropUserData,
  FirstData,
  FollowData,
  HypeTrainBeginData,
  HypeTrainEndData,
  HypeTrainProgressData,
  ImageDropData,
  OutgoingRaidData,
  RaidData,
  ShoutOutData,
  SubData,
  TimeoutUserData,
  YeetUserData,
} from "./data";

export interface PacketDataRegistry {
  [SocketEvent.banUser]: BanUserData;
  [SocketEvent.chatMessage]: ChatMessageData;
  [SocketEvent.cheer]: CheerData;
  [SocketEvent.deleteChatMessage]: DeletedChatMessageData;
  [SocketEvent.dropEmotes]: DropEmoteData;
  [SocketEvent.dropUser]: DropUserData;
  [SocketEvent.first]: FirstData;
  [SocketEvent.follow]: FollowData;
  [SocketEvent.hypeTrainBegin]: HypeTrainBeginData;
  [SocketEvent.hypeTrainEnd]: HypeTrainEndData;
  [SocketEvent.hypeTrainProgress]: HypeTrainProgressData;
  [SocketEvent.imageDrop]: ImageDropData;
  [SocketEvent.outgoingraid]: OutgoingRaidData;
  [SocketEvent.raid]: RaidData;
  [SocketEvent.shoutOut]: ShoutOutData;
  [SocketEvent.sub]: SubData;
  [SocketEvent.timeoutUser]: TimeoutUserData;
  [SocketEvent.yeetUser]: YeetUserData;
}
