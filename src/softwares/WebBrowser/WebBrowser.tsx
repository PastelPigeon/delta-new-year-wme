import { useState, useRef } from "react"
import NotFoundPage from "./pages/NotFound/NotFound"
import WorksPage from "./pages/Works/Works"
import webBrowserPagesInfo from "./pagesInfo.json"
import locale from "../../locales/zhHans.json"
import "./WebBrowser.css"

function getLocaleValue(key: string){
  return locale.filter((e) => {return e.key == key})[0].value
}

export default function WebBrowser(){
  const [currentPage, setCurrentPage] = useState<string>("blog.december.com")
  const queryBoxRef = useRef(null)
  const [isAddressInputOnFocus, setAddressInputFocusState] = useState<boolean>(false)

  return(
    <div className='webBrowser'>
      <div className='topBar'>
        <button data-style="transparent">{getLocaleValue("webBrowser-topBar-file")}</button>
        <button data-style="transparent">{getLocaleValue("webBrowser-topBar-edit")}</button>
        <button data-style="transparent">{getLocaleValue("webBrowser-topBar-view")}</button>
        <button data-style="transparent">{getLocaleValue("webBrowser-topBar-favorites")}</button>
        <button data-style="transparent">{getLocaleValue("webBrowser-topBar-tools")}</button>
        <button data-style="transparent">{getLocaleValue("webBrowser-topBar-help")}</button>

        <input className='addressInput' ref={queryBoxRef} placeholder={getLocaleValue("webBrowser-topBar-addressInput-placeholder")} onFocus={() => {setAddressInputFocusState(true)}} onBlur={() => {setTimeout(() => {setAddressInputFocusState(false)}, 150)}}/>
      </div>
      <div className='page'>
        {
          currentPage == "www.works.com" &&
          <WorksPage/>
        }
        {
          (currentPage != "www.works.com" && currentPage != "www.live.com" && currentPage != "www.about.com" && currentPage != "www.deltarune.com") &&
          <NotFoundPage targetAddress={currentPage}/> 
        }
      </div>
      {
        isAddressInputOnFocus &&
        <div className='addressInputMenu'>
          <label className='title'>{getLocaleValue("webBrowser-addressInputMenu-title")}</label>
          <div className='addressItemsList'>
            {
              webBrowserPagesInfo.map((e) => {
                return(
                  <button className='addressItem' data-style="transparent" onClick={() => {
                    setCurrentPage(e.address)
                    queryBoxRef.current!.value = getLocaleValue(e.displayName)
                  }}>
                    <label className='websiteName'>{getLocaleValue(e.displayName)}</label>
                    <label className='address'>{e.address}</label>
                  </button>
                )
              })
            }
          </div>
        </div>
      }
    </div>
  )
}