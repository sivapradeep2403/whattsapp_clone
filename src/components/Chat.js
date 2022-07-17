import { Avatar } from '@mui/material';
import {useState,useEffect} from 'react';
import React from 'react';
import '../CSS/chat.css'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TagFacesSharpIcon from '@mui/icons-material/TagFacesSharp';
import SettingsVoiceSharpIcon from '@mui/icons-material/SettingsVoiceSharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import {collection,getDocs,addDoc} from 'firebase/firestore'
import FireStore from '../firebase/firebase'
import SideBarChat from './SideBarChat';

function Chat (){

const[currentMessage,setCurrentMessage]=useState('');
const[currentMessageArray,setCurrentMessageArray]=useState([]);

useEffect(()=>{
   getMessages()
},[])

function getMessages(){
   //TRY CLEARING HTE ARRAY----------------------------------->
   setCurrentMessageArray([])
   currentMessageArray.length=0;
   const messageTable=collection(FireStore,"messages");
   getDocs(messageTable).then(snapshot=>{
      snapshot.docs.map(i=>{
          console.log("CHAT")
         let k=0;
         setCurrentMessageArray([...currentMessageArray,{
                                               key:k,
                                               user:i.data().user,
                                               message:i.data().message}])
                                                k++;
      })
     
   })
 console.log("currentMessageArray 2");
 // console.log(currentMessageArray[0].message)
  console.log(currentMessageArray.length)


}

function addMessage(){
   console.log("ADD MESSAGE")
   const messageTable=collection(FireStore,"messages");
   addDoc(messageTable,{user:'PRADEEP',
                        message:currentMessage});
   getMessages()                 
}


function fun_setCurrentMessage(v){
    setCurrentMessage(v);
  
}

    return(
        <div className="chat_parent">

          <div className="chat_header">

             <Avatar style={{fontSize:'60px'}}/>

                <div style={{marginLeft:'70px'}}>
                   <i><h3>ROOM NAME</h3></i> 
                    <i><h5>Last seen</h5></i>
                </div>

                <div className="chat_header_icons">
                   <SearchIcon  style={{marginRight:'10px'}} />
                   <AttachFileIcon style={{margin:'10px'}}/>
                   <MoreVertIcon  style={{margin:'10px'}}/>
                </div>     

            </div>

            <div className="chat_body">


            <h1>GN MRNG</h1>
            <h1>GN MRNG</h1>
            <h1>GN MRNG</h1>
            <h1>GN MRNG</h1>
            






            {
                     
                    currentMessageArray.map(i=>{
                      return(
                            <p key={i.id}>{i.message}</p>
               )
             })
           } 




                    
            </div>

            <div className="chat_footer">
                <TagFacesSharpIcon/>
                <input className="chat_input" onChange={(event)=>{fun_setCurrentMessage(event.target.value)}}/>
                <button onClick={()=>{addMessage()}}> <SendSharpIcon /></button>
               
                <SettingsVoiceSharpIcon/>
                
            </div>



        </div>         
    )
}export default Chat;