import "./Game.css"

export default function Game(){
  return(
    <iframe className='deltaruneGameIframe'  src={new URL("./deltarune-game/index.html", import.meta.url).href}/>
  )
}