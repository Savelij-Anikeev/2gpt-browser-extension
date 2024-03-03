import { IAIhelper, IMessage } from "./interfaces"


export const AIArray: IAIhelper[] = [
    {id: 1, name: 'GPT-4'},
    {id: 2, name: 'GEMINI'}
]

export const TestMessageArray: IMessage[] = [
    {
        id: 1, 
        isAI: false, 
        body: "Hi, GPT-4, what color is the sky?",
        sended_time: "16:30",
    },
    {
        id: 2, 
        isAI: true, 
        body: "Hello! A cloudless sky in the daytime, appears blue to the human eye.?",
        sended_time: "16:31",
    },
    {id: 3, isAI: false, body: "Thank you very much!", sended_time: "16:32"},
    {id: 4, isAI: true, body: "Have a good day!", sended_time: "16:33"},
]