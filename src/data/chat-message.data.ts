export interface ChatMessageData {
  userId: string;
  username: string;
  displayName: string;
  messageId: string;
  message: string;
  logoUrl: string;
  isMod: boolean;
  isVip: boolean;
  isPartner: boolean;
  isSubscriber: boolean;
  isBroadcaster: boolean;
  emotes?: {
    [emoteid: string]: string[];
  };
  type: string | undefined;
  id: string | undefined;
  isHighlighted: boolean;
}
