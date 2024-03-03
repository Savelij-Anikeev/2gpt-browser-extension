export interface IAIhelper {
    id: number
    name: string
} 

export interface IMessage {
    id: number
    isAI: boolean
    body: string
    sended_time?: string
}
