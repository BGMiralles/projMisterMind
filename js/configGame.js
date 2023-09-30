const difficulty = localStorage.getItem("difficulty");


function getMaximumColors(difficulty) {
    switch (difficulty) {
      case "facil":
        return 4;
      case "intermedio":
        return 5;
      case "dificil":
        return 6;
      default:
        return 4;
    }
  }