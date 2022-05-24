 //Rotate the Ships
  function rotate() {
    if (isHorizontal) {
      destroyer.classList.toggle('destroyer-container-vertical')
      submarine.classList.toggle('submarine-container-vertical')
      cruiser.classList.toggle('cruiser-container-vertical')
      battleship.classList.toggle('battleship-container-vertical')
      carrier.classList.toggle('carrier-container-vertical')
      isHorizontal = false
      return
    }
    if (!isHorizontal) {
      destroyer.classList.toggle('destroyer-container-vertical')
      submarine.classList.toggle('submarine-container-vertical')
      cruiser.classList.toggle('cruiser-container-vertical')
      battleship.classList.toggle('battleship-container-vertical')
      carrier.classList.toggle('carrier-container-vertical')
      isHorizontal = true
      return
    }
  }
  rotateButton.addEventListener('click', rotate)

@@ -181,16 +180,14 @@ document.addEventListener('DOMContentLoaded', () => {
      for (let i = 0; i < draggedShipLength; i++) {
        if (isHorizontal) {
          userSquares[parseInt(this.id) -3 + i].classList.add('taken', shipClass)
        } else userSquares[parseInt(this.id) -3 + width*i].classList.add('taken', shipClass)      
      }
    }
    if (draggedShip.childNodes[4] && selectedShipIndex === draggedShip.childNodes[4].id) {
      for (let i = 0; i < draggedShipLength; i++) {
        if (isHorizontal) {
          userSquares[parseInt(this.id) -4 + i].classList.add('taken', shipClass)
        } else userSquares[parseInt(this.id) -4 + width*i].classList.add('taken', shipClass) 
      }
    }
    displayGrid.removeChild(draggedShip)
@@ -213,7 +210,6 @@ document.addEventListener('DOMContentLoaded', () => {
    if (currentPlayer === 'computer') {
      turnDisplay.innerHTML = 'Computers Go'
      setTimeout (computerGo, 1000)
    }
  }
  startButton.addEventListener('click', playGame)
