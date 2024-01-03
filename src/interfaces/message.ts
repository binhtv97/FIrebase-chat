/**
 * Created by NL on 6/27/23.
 */

import type {IMessage} from 'react-native-gifted-chat/lib/Models';
import type {BaseEntity} from './base';

type MessageStatus = 'pending' | 'sent';

export interface LatestMessageProps {
  readBy: {
    [userId: string]: boolean;
  };
  senderId: string;
  text: string;
  created: number;
}
export interface MessageProps extends BaseEntity, IMessage {
  text: string;
  created?: number;
  senderId: string;
  readBy: {
    [userId: string]: boolean;
  };
  status?: MessageStatus;
  imageUrl?: string;
  type?: 'file' | 'image' | 'video';
  fileUrl?: string;
  fileName?: string;
  fileSize?: number;
  mine?: string;
  extension?: string;
}
