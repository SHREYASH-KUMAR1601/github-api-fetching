import React, { useEffect, useState } from 'react'

function Github({username}) {

  let [user,setUser]=useState({imgUrl:"",followers:0,following:0});

  //api call
  useEffect(()=>{
    fetch(`https://api.github.com/users/${username}`).then(async (res)=>{
      let data = await res.json(); 
      let {avatar_url , followers, following}= data;
      console.log(data)
      setUser(()=>{
        return {
          imgUrl: avatar_url,
          followers: followers,
          following: following,
        };
      });
    });
  },[]);


  return (
    <div>
      <img src={user.imgUrl} alt="img" />
      <h1>Name: {username}</h1>
      <h1>Followers: {user.followers}</h1>
      <h1>Following:{user.following}</h1>
    </div>
  )
}

export default Github