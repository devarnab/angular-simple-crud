export enum MessageType {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Danger = 'danger',
}

export interface MessageConfig {
  message: string;
  type: MessageType;
  autoRemove?: boolean;
}
