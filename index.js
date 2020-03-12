document.addEventListener("DOMContentLoaded", function(){
  
  const moves = []

  createGrid()
  renderBot(currentPosition)


  const moveButton = document.querySelector("#move-button")
  moveButton.addEventListener("click", function(e){
    const direction = moves.shift()
    if (direction){
      move(direction)
      const moveList = document.querySelector("#moves-container")
      moveList.firstElementChild.remove()
    } else {
      console.log("Done!")
    }
  })
})

  document.addEventListener("keydown", function(e){
    e.preventDefault()

  }







  
}