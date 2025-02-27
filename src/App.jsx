import React, {useEffect, useState} from 'react';
import Card from "./components/Card.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../store/actions/postListActions.js";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import {fetchPostsFromAPI} from "../utils.js";
import {CARD_PER_PAGE} from "../constants.js";
import './App.css';

function App(props) {
  const [currentPage,setCurrentPage]=useState(0);

  const dispatch=useDispatch();
  const postList=useSelector(state=>state.postList);
  const loading=useSelector(state=>state.loading);

  //total pages
  const totalPages=Math.ceil(postList.length/CARD_PER_PAGE);


  useEffect(() => {

      setTimeout(()=>{
        fetchPostsFromAPI().then((postList)=>{
          //console.log(postList);
          dispatch(addPost(postList));
        })
      },5000)

  }, []);

  function handleClickOnPageBtn(pageNo)
  {
    setCurrentPage(pageNo);
  }

  function navLeft(e){
    setCurrentPage(prev=>prev-1);
  }
  function navRight(){
    setCurrentPage(prev=>prev+1);
  }

  if(loading===true)
  {
    return (
      <h1 className={"font-bold text-3xl text-center pt-20"}>Loading...</h1>
    );
  }
  else
  return (
    <div className={"w-4/5 mx-auto h-full py-2 "}>

      <div className={"card-container p-3 flex flex-wrap gap-4 justify-center"}>
        {
          postList.slice(currentPage*CARD_PER_PAGE,currentPage*CARD_PER_PAGE+CARD_PER_PAGE).map(({id,title,body})=>{
          return <Card key={id} id={id} title={title} body={body}/>
        })

        }
      </div>

      <div className={"pagination-bar mt-5 flex flex-wrap justify-center items-center gap-y-3 gap-x-2 w-4/5 mx-auto "}>
        <button onClick={navLeft} className={`${currentPage===0?"hidden":""} rounded-full p-1 font-semibold shadow-lg`}><FaAnglesLeft/></button>
        {
          new Array(totalPages).fill(0).map((val,idx)=>{
            return <button key={idx} onClick={()=>handleClickOnPageBtn(idx)} className={`rounded-full p-1 font-semibold shadow-lg ${idx===currentPage?'text-black bg-white h-9 w-9 ':'bg-gray-400 text-white h-7 w-7 text-sm'}`}>{idx + 1}</button>
        })
        }
        <button onClick={navRight} className={`${currentPage===totalPages-1?"hidden":""} rounded-full p-1 font-semibold shadow-lg`}><FaAnglesRight/></button>
      </div>
    </div>
  );
}

export default App;