const reducer = (state, action) => {
  switch(action.type) {
    case "NUMBER":
      if (state.afterOperation === true) {
        state.result = ""
        state.afterOperation = false
      }
      state.result = state.result.concat(action.result)
      state.isNumber = true
      return {...state}

    case "Clear":
      state={
        result: "",
        calculated: 0,
        allowSignChange: true,
        history: "",
        second: "",
        sign: "",
        isNumber: true,
        numberCounter: true,
        afterOperation: false,
        firstTime: true
      }
      return {...state}

    case "Backspace":
      if(state.isNumber){
        state.result = state.result.substring(0, state.result.length - 1);
      }
      return { ...state }

    case "/":
      state.history = state.history + `  ÷ ${state.second}`
      state.calculated = Math.round((Number(state.calculated) / Number(state.second) + Number.EPSILON) * 10000) / 10000
      state.result = state.calculated
      return { ...state }

    case "*":
      state.history = state.history + `  × ${state.second}`
      state.calculated = Math.round((Number(state.calculated) * Number(state.second) + Number.EPSILON) * 10000) / 10000      
      state.result = state.calculated
      return { ...state }

    case "-":
      state.history = state.history + `  − ${state.second}`
      state.calculated = Math.round((Number(state.calculated) - Number(state.second) + Number.EPSILON) * 10000) / 10000
      state.result = state.calculated
      return { ...state }
      

    case "+":
      state.history = state.history + `  + ${state.second}`
      state.calculated = Math.round((Number(state.calculated) + Number(state.second) + Number.EPSILON) * 10000) / 10000
      state.result = state.calculated
      return { ...state}

    case "Enter":
      // state.result = state.calculated
      return { ...state }

    case ".":
      if (!String(state.result).includes(".") && state.isNumber){
          state.result = state.result + "."
      }
      return { ...state }

    case "±":
      if(state.isNumber){
        state.result = state.result * -1
      } else {
        state.calculated = state.calculated * -1
        state.result = state.calculated
      }
      if(state.sign === "Enter"){
        state.history = state.history + `  (Neg)`
      }
      return { ...state }
    default:
      return state
  }
}

export default reducer