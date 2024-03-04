// react hooks
import { useState } from "react";

// components
import Chat from "../../components/Chat";
import Header from "../../components/Header";
import Nav from "../../components/Nav";



export default function HomePage(){
    const [selectedAI, changeselectedAI] = useState<string>('GPT-4');

    return (
        <>
        <Header/>
        <Nav selectedAI={selectedAI} 
            handleChange={(e: any) => { changeselectedAI(e) }}/>
            <Chat selectedAI={selectedAI}/>
        </>
    );
}