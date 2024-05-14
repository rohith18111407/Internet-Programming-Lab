import React from "react";
import { useState } from "react";

function Search(props){
  return(
    <div>
      <input type="text" onChange={props.searchdress}></input>
    </div>
  )
}

export default Search;