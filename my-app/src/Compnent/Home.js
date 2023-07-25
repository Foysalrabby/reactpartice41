import React, { useEffect, useState } from 'react';
import { AccessAlarm } from '@mui/icons-material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';




const Home = () => {
   //----------color change---------
    const [likecolor,setcolor]=useState("");
    const handlecolor=()=>{
        const color="";
       if(likecolor === color){
            setcolor("primary");
       }
       else{
        setcolor("");
       }
    //    const color=likecolor ? '': 'primary' ;
    //    setcolor(color);
    }
//three different kinds api to data load for
   const [loadarraytjson,setloadarrayTjson]=useState([]);
   const [loadjsonT ,setloadjsonT]=useState({});//single
   const [loadjsontarr ,setlodsontarr]=useState(); //jsonmodde array then jsonob


   useEffect(()=>{

//array to json on object load
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data =>{
        setloadarrayTjson(data);}
            )
 //json to json object single user
    fetch("https://jsonplaceholder.typicode.com/users/7")
        .then(res => res.json())
        .then(data =>{
            setloadjsonT(data);}
            )

   },[]);

   
    return (
        <div>
            
             <h1> hello home page..</h1>
             <AccessAlarm></AccessAlarm>
             <ThumbUpIcon onClick={handlecolor} color={likecolor}></ThumbUpIcon>
             <p>Array to json object load</p>
             {
                loadarraytjson.map(loadkey1=><li>{loadkey1.address.city +"name :"+ loadkey1.name}</li>)
             }
           <br></br>
           {/* {
            loadjsonT.map(loadkey1=><li>{loadkey1.address.city +"name :"+ loadkey1.name}</li>)
             }  map dorkar nai json object hishabe ase*/} 
            <p>start singlename :  {loadjsonT.name}</p>
            <p>start cmpany name :  {loadjsonT.company.name}</p>


        </div>
    );
};

export default Home;