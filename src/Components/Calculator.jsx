export default function Calculator(){
    
    return(
        <div>
            <div className="col">
                <button id="b_1" onclick={op="300"}>300g</button>
                <button id="b_2" onclick={op="400"}>400g</button>
                <button id="b_3" onclick={op="180"}>180g</button>
            </div>
            <div className="col">
                <button onclick={accept_g}>Подтвердить</button>
            </div>
            <div>
                <p id="result_g">{result_g}</p>
            </div>
            <div>
                <p>Количество рядов:</p>
                <input type="number" id="num1"placeholder="0"/>
            </div>
            <div>
                <p>Количество 7-рок(12):</p>
                <input type="number" id="num2" placeholder="0"/>
            </div>
            <div>
                <p>Количество 8-рок(15):</p>
                <input type="number" id="num3" placeholder="0"/>
            </div>
            <div>
                <p>Остаток:</p>
                <input type="number" id="num4" placeholder="0"/>
            </div>
            <div className="col">
                <button onclick={accept_ks}>Посчитать</button>
            </div>
            <div>
                <p id="result_all">Количество штук:</p>
            </div>
            <div>
                <p>{}</p>
            </div>
        </div>
    )
}
let op; 
let result_g;

function accept_g() {
  if (op === "300"){
    result_g = "Выбрано 300g"
  } 
}
     
let arr;

let rrow = [104, 97, 180];
let nrow = [13, 7, 12];
let mrow = [8, 8, 15];

function accept_ks(){

  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let num3 = Number(document.getElementById("num3").value);
  let num4 = Number(document.getElementById("num4").value);

  let result_all = ((num1 * rrow[arr]) + (num2 * nrow[arr]) + (num3 * mrow[arr]) + num4) + ' KS(штук)';

  document.getElementById('result_all').innerHTML = result_all;
}
