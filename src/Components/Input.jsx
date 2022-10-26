const inputClick = () => console.log("Clicked")

const helpText = "Help"

export const elements = <div>
    <input type="text" placeholder={helpText} onClick={inputClick}/>

    {/* Если значение helpText равно "Help" , то выводится Yes или No */}
    <p>{helpText === "Help" ? "Yes" : "No"}</p>
</div>

