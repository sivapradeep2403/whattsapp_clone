import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageIcon from '@mui/icons-material/Message';
import { Input,IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../CSS/sideBar.css';
import SideBarChat from './SideBarChat';
import TextField from '@mui/material/TextField';
import FireStore from '../firebase/firebase';
import {collection,getDocs,addDoc} from 'firebase/firestore';
import {useState,useEffect} from 'react'
function SideBar(){

 const[roomNames,setRoomNames]=useState([]);
 //EXECUTES INITIALLY
 useEffect(()=>{
         fetchNew();       
   },[])
 
// FETCH INITIAL VALUES
   function fetchNew(){
        const RoomTable=collection(FireStore,"ROOMS");
        getDocs(RoomTable).then(snapshot=>{
          snapshot.docs.map(i=>{
            setRoomNames([...roomNames,{
                                        key:i.id,
                                        roomName:i.data().roomName
                                        }])
           // console.log(i.data().roomName)
          })
        })
    // console.log(roomNames) 
   }


//ADD NEW 
function addNew(){
  const roomName_=prompt("NEW ROOM NAME !")
  const RoomTable=collection(FireStore,"ROOMS");
  addDoc(RoomTable,{roomName:roomName_});
  fetchNew();
}


    return(
        <div className="sideBar_Parent">
           
            <div className="sideBar_header">
                <AccountCircleIcon style={{fontSize: '60px'}} />
                    <div className="sideBar_header_options">
                      <IconButton>
                        <DonutLargeIcon/>
                      </IconButton>
                      <IconButton>
                        <MessageIcon  style={{marginLeft:'30px'}}/>
                      </IconButton>
                      <IconButton>
                        <MoreVertIcon style={{marginLeft:'30px'}}/>
                      </IconButton>
                    </div>
            </div>

            <div className="sideBar_search">
                <IconButton>
                    <SearchIcon style={{fontSize:'30px',marginLeft:'1px'}}/>
                </IconButton>
                <TextField id="outlined-basic" label="SEARCH" variant="outlined"  className="sideBar_search_input"  />
                {/* <Input type="text" placeholder="SEARCH FOR CHAT" className="sideBar_search_input"/> */}
            </div>
             <h2 style={{marginLeft:"30px",margin:'30px',cursor:"pointer"}}
             onClick={()=>{ addNew()}}>Add new Chat</h2>
           
           {
             roomNames.map(i=>{
               return(
                 <SideBarChat key={i.id} name={i.roomName} />
               )
             })
           }
      


        </div>
    )
}export default SideBar;