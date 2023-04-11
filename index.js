// code your solution here
function saturdayFun(activity = `roller-skate`) {
    //console.log("You've been razzled!");
    return (`This Saturday, I want to ${activity}!`)
  }
  saturdayFun()

  function mondayWork (werk = `go to the office`){
   // console.log ("")
   return (`This Monday, I will ${werk}.`)
  }
function wrapAdjective (visualflair = `*`){
    return function(lala = `special`){
        return (`You are ${visualflair}${lala}${visualflair}!`)
    }
}

