import { Avatar } from '@mui/material';
import React from 'react';
import {useState,useEffect} from 'react';
import '../CSS/sideBarChat.css'


function SideBarChat(props){

const[seed,setSeed]=useState('');
useEffect(()=>{
    setSeed(Math.floor(Math.random()*5000));
},[])

    return(
        <div className="sideBarChat_parent">
           
           <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
           <div style={{marginLeft:'30px'}}>
                <i><h4 key={props.key}>{props.name}</h4></i> 
                <i><h6 key={props.key}>LAST MESSAGE</h6></i>
           </div>
            
        </div>
    )
}export default SideBarChat;