function solveEqn(eqn_str) {
    if (!equationEvaluvator(eqn_str)) return "ERROR";
    let eqn_arr = makeArray(eqn_str);
    eqn_arr = handleMinus(eqn_arr);
    console.log("equationSplit", eqn_arr);
    eqn_arr = multiplyDivide(eqn_arr);
    console.log("mulanddiv", eqn_arr);
    eqn_arr = addSub(eqn_arr);
    console.log("testoutput", eqn_arr);
    return eqn_arr;
  }
function parseNum(stringvalue) {
    let pattern = /^[0-9]*$/;
    var b = stringvalue.map(entry => {
      if (pattern.test(entry)) {
        return parseInt(entry, 10);
      } else {
        return entry;
      }
    });
    console.log("b value is ", b);
    return b;
  }

function makeArray(equation) {
    let partialEquationSplit = equation.split("");
    console.log("partialEquationSplit", partialEquationSplit);
    let fullEqualtionSplit = fullSplit(partialEquationSplit);
    console.log("fullEqualtionSplit", fullEqualtionSplit);
    let parsedarray = parseNum(fullEqualtionSplit);
    console.log("parsedarray", parsedarray);
    return parsedarray;
  }

function fullSplit(partialEquationSplit) {
    let pattern = /^[0-9]*$/;
    for (let i = 0; i < partialEquationSplit.length - 1; i++) {
      if (
        pattern.test(partialEquationSplit[i]) &&
        pattern.test(partialEquationSplit[i + 1])
      ) {
        partialEquationSplit.splice(
          i,
          2,
          partialEquationSplit[i] + partialEquationSplit[i + 1]
        );
        i--;
      }
    }

    return partialEquationSplit;
  }

function multiplyDivide(equationSplit) {
    let number;

    for (let i = 1; i < equationSplit.length - 1; i++) {
      if (equationSplit[i] == "*") {
        number = equationSplit[i - 1] * equationSplit[i + 1];
        console.log("mulnumber", number);
        equationSplit.splice(i - 1, 3, number);
        i--;
        console.log("equationSplitmul", equationSplit);
      } else if (equationSplit[i] == "/") {
        number = equationSplit[i - 1] / equationSplit[i + 1];
        console.log("devnumber", number);
        equationSplit.splice(i - 1, 3, number);
        i--;
        console.log("equationSplitdiv", equationSplit);
      }
    }
    return equationSplit;
  }

function addSub(mulanddiv) {
    let add1 = additionAndSubtraction(mulanddiv);
    return add1;
  }

function additionAndSubtraction(minus) {
    let number;
    for (let i = 1; i < minus.length - 1; i++) {
      if (minus[i] == "+") {
        number = minus[i - 1] + minus[i + 1];
        minus.splice(i - 1, 3, number);
        i--;
      } else if (minus[i] == "-") {
        number = minus[i - 1] - minus[i + 1];
        minus.splice(i - 1, 3, number);
        i--;
      }
    }

    return minus;
  }

function handleMinus(equationSplit) {
    let pattern = /^[0-9]*$/;
    if (equationSplit[0] == "-") {
      equationSplit[1] = equationSplit[1] * -1;
      equationSplit.splice(0, 1);
    }
    for (let i = 0; i < equationSplit.length - 1; i++) {
      if (equationSplit[i] == "-" && !pattern.test(equationSplit[i - 1])) {
        equationSplit[i + 1] *= -1;
        equationSplit.splice(i, 1);
      }
    }
    return equationSplit;
  }
function equationEvaluvator(eqn) {
    for (let i = 0; i < eqn.length; i++) {
      if (isSymbol(eqn[i]) && isSymbol(eqn[i + 1])) {
        if (isPlusMinus(eqn[i]) || eqn[i + 1] != "-") return false;
      }
    }
    return true;
  }

function isSymbol(value) {
    return ["-", "+", "*", "/"].indexOf(value) > -1;
  }
function isPlusMinus(value) {
    return value == "+" || value == "-";
  }

export {solveEqn};
