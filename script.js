function radioClicked(){
  let shapeChoice = document.querySelector('input[name="color-btn"]:checked').value;

switch (shapeChoice) {
  case 'Black Adam':
    document.getElementById("spanzinho").innerHTML = "Black Adam"
    break;
  case 'Darkseid':
    document.getElementById("spanzinho").innerHTML = "Darkseid"
    break;
  case 'Joker':
    document.getElementById("spanzinho").innerHTML = "Joker"
    break;
  case 'Martian Manhunter':
    document.getElementById("spanzinho").innerHTML = "Martian Manhunter"
    break;
  case 'Sandman':
    document.getElementById("spanzinho").innerHTML = "Sandman"
    break;
  case 'Grim Knight':
    document.getElementById("spanzinho").innerHTML = "Grim Knight"
    break;
  default:
    doucment.getElementById("spanzinho").innerHTML = "Grim Knight"
}
};

radioClicked();