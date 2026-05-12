export type MessageType = 
    | "text"
    | "image"
    | "file"
    | "audio";

export interface Message{
    id:string;
    senderId:string;
    chatId:string;
    type:MessageType;
    content:string;
    createdAt:Date

}

