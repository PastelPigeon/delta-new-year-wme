import "./NotFound.css"

export default function NotFoundPage(props: {targetAddress: string}){
  return(
    <div className="notFoundPage">
      <div className="top">
        <img src={new URL("./assets/notFoundIcon.png", import.meta.url).href}/>
        <label className="title">您所要查找的页面不存在</label>
      </div>
      <label className="info">您所要查找的页面不存在，这可能是由以下原因造成的：<b>该页面被永久删除</b>, <b>该页面被重命名</b>, <b>该页面被移动到了新的位置</b></label>
      <label className="solutionsTitle"><b>请尝试以下解决方法</b></label>
      <ul className="solutions">
        <li className="solutionItem">如果您在地址栏中手动搜索了该页面，请确保您输入的地址正确</li>
        <li className="solutionItem">返回<b>{props.targetAddress}</b></li>
        <li className="solutionItem">稍后刷新重新加载此页面</li>
        <li className="solutionItem">返回上一页面</li>
      </ul>
      <div className="bottom">
        <label>404 Page Not Found</label>
      </div>
    </div>
  )
}