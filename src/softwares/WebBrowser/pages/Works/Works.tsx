import { useState } from "react"
import worksInfo from "./worksInfo.json"
import "./Works.css"

export default function WorksPage(){
  const [query, setQuery] = useState<string>("")

  return(
    <div className="worksPage">
      <div className="top">
        <img className="logo" src={new URL("./assets/site-logo.png", import.meta.url).href}/>
        <input className="queryBox" onChange={(e) => {setQuery(e.currentTarget.value)}}/>
      </div>

      <div className="worksGrid">
        {
          worksInfo.map((e) => {
            if (e.title.includes(query) && query != "" || query == ""){
              return(
                <button className="workItem" data-style="transparent">
                  <img src={new URL(e.cover, import.meta.url).href} className="cover"/>
                  <div className="info">
                    <label className="title">{e.title}</label>
                    <div className="author">
                      <img className="avater" src={new URL(e.author.avater, import.meta.url).href}/>
                      <label className="name">{e.author.name}</label>
                    </div>
                  </div>
                </button>
              )
            }
          })
        }
      </div>
    </div>
  )
}