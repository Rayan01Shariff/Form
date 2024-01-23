var btn=document.getElementById("myBtn");

btn.onclick = function(event) {
  var name = document.getElementById('validationDefault01').value;
  var number = document.getElementById('validationDefault02').value;
  var email = document.getElementById('validationDefaultUsername').value;
  var address = document.getElementById('validationDefault03').value;
  var state = document.getElementById('validationDefault04').value;
  var city = document.getElementById('validationDefault05').value;
  var checkbox = document.getElementById('gridCheck').value;
  var radio = document.getElementById('flexRadioDefault1').value;
  var radio = document.getElementById('flexRadioDefault2').value;

  event.preventDefault();

  
  document.getElementById('popupContent').innerText = name + '\n'  + number + '\n' + email + '\n'  + address + '\n'  + state + '\n' + city + '\n' + checkbox + '\n' + radio ; 

  
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('popup').style.display = 'block';


}
function closePopup() {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('popup').style.display = 'none';
}
