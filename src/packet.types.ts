import { SocketEvent } from "./events/socket.events";
import { PacketDataRegistry } from "./packet-registry";

export interface BasePacket {
  event: SocketEvent;
  id: string;
}

export type Packet<E extends SocketEvent> = E extends keyof PacketDataRegistry
  ? BasePacket & {
  event: E;
  data: PacketDataRegistry[E];
}
  : BasePacket & {
  event: E;
  data?: never;
};
