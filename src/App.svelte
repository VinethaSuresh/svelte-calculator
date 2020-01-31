<script>
  import Keypad from "./Keypad.svelte";
  import {solveEqn} from "./handler.js"
  let handleClick = event => {
    console.log(event.target.getAttribute("value"));

    if (event.target.value == "c") {
      disp_value = "";
    } else if (event.target.value == "=") {
      let eqn = disp_value;
      console.log("eqn value", eqn);
      disp_value = solveEqn(eqn);
    } else {
      disp_value += event.target.getAttribute("value");
      console.log("target.getAttribute", disp_value);
    }
  };
  var disp_value = "";
</script>
<style>

table {
    margin: auto;
    background-color: #222;
    width: 295px;
    max-width: 295px;
    height: 325px;
    text-align: center;
    border-radius: 4px;
    padding: 10px;
}

 #display {
    width: 290px;
    max-width: 300px;
    font-size: 26px;
    text-align: right;
    background-color: #bcbd95;
}


  /* main {
    padding: 1em;
    max-width: 240px;
    margin: auto;
  } */


caption {
    font-size: 40px;
    color: red;
}
</style>

<main>
  <!-- <div id="calculatorId"> -->
  
  <table>
  <caption>CALCULATOR</caption>
    <div>
      <input type="text" name="display" id="display" value={disp_value} />
    </div>
    <Keypad {handleClick} />
    </table>
  <!-- //</div> -->
</main>
