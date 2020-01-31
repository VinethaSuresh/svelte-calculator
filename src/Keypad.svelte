<script>
let buttons = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "c", 0, "=", "/"];
  let names = [
    "one",
    "two",
    "three",
    "plus",
    "four",
    "five",
    "six",
    "minus",
    "seven",
    "eight",
    "nine",
    "multiply",
    "clear",
    "zero",
    "equal to",
    "division"
  ];
  export let handleClick;
  </script>
  <style>
  
input {
    outline: 0;
    position: relative;
    left: 5px;
    top: 5px;
    border: 0;
    color: #495069;
    background-color: #fff;
    border-radius: 4px;
    width: 60px;
    height: 50px;
    float: left;
    margin: 5px;
    font-size: 20px;
    box-shadow: 0 4px rgba(0, 0, 0, 0.2);
    margin-bottom: 15px;
}
  </style>
<div>
  {#each buttons as button, idx}
    <input
      type="button"
      value={button}
      name={names[idx]}
      on:click={handleClick} />
  {/each}
</div>
