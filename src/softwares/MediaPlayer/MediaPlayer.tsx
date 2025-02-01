import { useState } from "react";
import "./MediaPlayer.css"

function getTime(){
  var newyear=new Date('1 28 2025');
  var date1=new Date();
  var ms=newyear-date1;
  var day=Math.floor(ms/1000/3600/24);
  var h=Math.floor(ms%(3600*24*1000)/1000/3600);
  var m=Math.floor(ms%(3600*24*1000)/1000%3600/60);
  var s=Math.floor(ms%(3600*24*1000)/1000%3600%60);

  return([`${day} 天`, `${h} : ${m} : ${s}`])
}

export default function MediaPlayer(){
  const [currentTime, setCurrentTime] = useState(getTime())

  setTimeout(() => {
    setCurrentTime(getTime)
  }, 1000)

  return(
    <div className="mediaPlayer">
      <label className="info">正在尝试从在线库同步媒体文件(0 KB/s)</label>
      <div className="timer">
        <label className="title">预计剩余时间</label>
        <label className="days">{currentTime[0]}</label>
        <label className="hms">{currentTime[1]}</label>
      </div>
      <label className="info">请坐和放宽♪(´▽｀)</label>
    </div>
  )
}