import { Birdhouse,ChartBar,Circle,Database,File,FileEdit,GitGraph,LogOut, Mail, MessageCircle, PersonStanding, PlusSquare, Search, Settings, Settings2, TrendingUp, TrendingUpIcon } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { setAuthUser } from '../../redux/authSlice';
import axios from 'axios';


const Leftsidebar = () => {
    const navigate= useNavigate();
    const {user}= useSelector(store=>store.auth);
    const dispatch= useDispatch();
    const [open, setOpen]= useState(false);

     const LogoutHandler= async() => {
        try{
            const res= await axios.get('http://localhost:8000/api/v1/user/logout',{withCredentials:true});
            if(res.data.success){
                dispatch(setAuthUser(null));
                navigate("/login");
                toast.success(res.data.message);
            }
        }
        catch(error){
            toast.error(error.response.data.message);
        }
    }
   
    const sidebarhandler= (textType) => {
        if(textType==='Logout'){
             LogoutHandler();}
        else if(textType==='Message'){
            navigate('/chat');
        }
    }
   
  const sidebarItems = [
    { icon: <Birdhouse />, text: "Home" },
    { icon: <Mail />, text: "Inbox" },
    { icon: <Database />, text: "Data" },
    { icon: <MessageCircle />, text: "Alerts" },
    { icon: <Settings />, text: "Settings" },
    { icon:  <FileEdit/>, text:"Feed"},
    { icon:<ChartBar/>, text:"Current Status"},
    { icon:<Circle/>, text:"About us"},
    { icon:<PersonStanding/>, text:"Customer Service"},
    { icon:<LogOut/>, text:"Logout"},
]
   return (
    
        <div className='fixed top-0 z-10 left-0 px-4 border-r border-gray-300 w-[16%] h-screen'>
            <div className='flex flex-col '>
                <h1 className='my-8 pl-5 font-bold text-xl'>Gratify</h1>
                {
    sidebarItems.map((item, index)=>{
        return(
            <div onClick={()=> sidebarhandler(item.text)} key ={index} className='flex items-center gap-4 relative hover:bg-gray-100 cursor-pointer rounded-lg p-3 my-1'>
                {item.icon}
                <span>{item.text}</span> </div>
        )
    })
}
            </div>
           
        </div>
    )
}

export default Leftsidebar