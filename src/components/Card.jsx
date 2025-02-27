import React from 'react';
import { RxCross2 } from "react-icons/rx";
import {useDispatch} from "react-redux";
import {removePost} from "../../store/actions/postListActions.js";

function Card({id,title,body}) {
  const dispatch=useDispatch();

  function handleRemovePost(id){
    dispatch(removePost(id));
  }

  return (
    <div className={"shadow-sm bg-white rounded-md gap-y-2 w-[230px] h-[350px] flex flex-col p-4 justify-between"}>
      <button onClick={()=>handleRemovePost(id)} className={"self-end"}><RxCross2 className={" text-red-500 text-lg"}/></button>
      <h2 className={"leading-[18px] font-bold"}>{title.split(" ").slice(0,7).join(" ").padEnd(title.split(" ").slice(0,7).join(" ").length+3,"...")}</h2>
      <p className={"leading-[18px] text-sm font-semibold"}>{body.split(" ").slice(0,5).join(" ").padEnd(body.split(" ").slice(0,5).join(" ").length+3,"...")}</p>
      <p className={"font-bold text-[10px] text-gray-400"}>{new Date().toString()}</p>
      <img className={"rounded "} src="/images/image1.jpeg" alt=""/>
    </div>
  );
}

export default Card;