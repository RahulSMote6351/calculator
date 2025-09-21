
      let input = document.querySelector("#inputprompt");
      let result = document.querySelector(".result");
      let buttons = document.querySelectorAll("button");

      function calculaterResult(ele) {
        let exp = `${input.value}${ele.innerText}`;
        input.value =exp;

        if(["+","-","*","/","%","."].includes(ele.innerText)) return;
        result.value = eval(exp);
      }

      function clearAll(){
        input.value= "";
        result.value= "";
      }


        input.addEventListener("input", () => {
    let exp = input.value;
    try {
      if (exp.trim() !== "") {
        result.value = eval(exp);
      } else {
        result.value = "";
      }
    } catch {
      result.value = "";
    }
  });
