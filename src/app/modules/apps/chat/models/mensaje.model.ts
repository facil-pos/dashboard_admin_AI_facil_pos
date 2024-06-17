export interface Message {
    from: string;
    to: string;
    name_chat: string;
    url_profilePic: string;
    body: string;
  }
  
export interface MessagesContainer {
  tomessages: Message[];
}
  
export interface Postmessage {
    numbers: string[];
    message: string;
}