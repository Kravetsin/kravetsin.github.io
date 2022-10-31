import Icon from "../img/Ico.png"

export default function MainIco(){
    return(
        <div className="dropdown">
            <button className="dropbtn"><img className="icon" src={Icon} alt="Eye" width={120}/></button>
            <div className="dropdown-content">
                <a href="https://discord.gg/x2czArDckP" target="blank">Discord</a>
                <a href="https://t.me/Kravetsin" target="blank">Telegram</a>
                <a href="https://steamcommunity.com/groups/overdosebyukraine" target="blank">Steam Group</a>
            </div>
        </div>
    )
}