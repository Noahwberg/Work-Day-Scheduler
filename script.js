// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function init() {
  // debugger;
  var hour8 = localStorage.getItem('hour-8');
  document.querySelector('#text8').value = hour8;
  var hour9 = localStorage.getItem('hour-9');
  document.querySelector('#text9').value = hour9;
  var hour10 = localStorage.getItem('hour-10');
  document.querySelector('#text10').value = hour10;
  var hour11 = localStorage.getItem('hour-11');
  document.querySelector('#text11').value = hour11;
  var hour12 = localStorage.getItem('hour-12');
  document.querySelector('#text12').value = hour12;
  var hour13 = localStorage.getItem('hour-13');
  document.querySelector('#text13').value = hour13;
  var hour14 = localStorage.getItem('hour-14');
  document.querySelector('#text14').value = hour14;
  var hour15 = localStorage.getItem('hour-15');
  document.querySelector('#text15').value = hour15;
  var hour16 = localStorage.getItem('hour-16');
  document.querySelector('#text16').value = hour16;
  var hour17 = localStorage.getItem('hour-17');
  document.querySelector('#text17').value = hour17;
  var hour18 = localStorage.getItem('hour-18');
  document.querySelector('#text18').value = hour18;
  var hour19 = localStorage.getItem('hour-19');
  document.querySelector('#text19').value = hour19;
  var hour20 = localStorage.getItem('hour-20');
  document.querySelector('#text20').value = hour20;
  var hour21 = localStorage.getItem('hour-21');
  document.querySelector('#text21').value = hour21;
  var hour22 = localStorage.getItem('hour-22');
  document.querySelector('#text22').value = hour22;
  setHourColors();
} 

function setHourColors() {
  var time = dayjs().hour();
  // debugger;
  for (var i = time; i < 23; i++) {
    if (i == time) {
      document.querySelector('#hour-' + i).classList.remove('past');
      document.querySelector('#hour-' + i).classList.add('present');
    } else {
      document.querySelector('#hour-' + i).classList.remove('past');
      document.querySelector('#hour-' + i).classList.add('future');
    }
  }
}

setTimeout(function() {
  setHourColors();
  var time = dayjs().hour();
  if (time == 0) {
    localStorage.setItem('hour-8', null);
    localStorage.setItem('hour-9', null);
    localStorage.setItem('hour-10', null);
    localStorage.setItem('hour-11', null);
    localStorage.setItem('hour-12', null);
    localStorage.setItem('hour-13', null);
    localStorage.setItem('hour-14', null);
    localStorage.setItem('hour-15', null);
    localStorage.setItem('hour-16', null);
    localStorage.setItem('hour-17', null);
    localStorage.setItem('hour-18', null);
    localStorage.setItem('hour-19', null);
    localStorage.setItem('hour-20', null);
    localStorage.setItem('hour-21', null);
    localStorage.setItem('hour-22', null);
  }
}, 60000);

init();

document.querySelector('#btn8').onclick = function() {
  var text = document.querySelector('#text8').value;
  localStorage.setItem('hour-8', text);
}
document.querySelector('#btn9').onclick = function() {
  var text = document.querySelector('#text9').value;
  localStorage.setItem('hour-9', text);
}
document.querySelector('#btn10').onclick = function() {
  var text = document.querySelector('#text10').value;
  localStorage.setItem('hour-10', text);
}
document.querySelector('#btn11').onclick = function() {
  var text = document.querySelector('#text11').value;
  localStorage.setItem('hour-11', text);
}
document.querySelector('#btn12').onclick = function() {
  var text = document.querySelector('#text12').value;
  localStorage.setItem('hour-12', text);
}
document.querySelector('#btn13').onclick = function() {
  var text = document.querySelector('#text13').value;
  localStorage.setItem('hour-13', text);
}
document.querySelector('#btn14').onclick = function() {
  var text = document.querySelector('#text14').value;
  localStorage.setItem('hour-14', text);
}
document.querySelector('#btn15').onclick = function() {
  var text = document.querySelector('#text15').value;
  localStorage.setItem('hour-15', text);
}
document.querySelector('#btn16').onclick = function() {
  var text = document.querySelector('#text16').value;
  localStorage.setItem('hour-16', text);
}
document.querySelector('#btn17').onclick = function() {
  var text = document.querySelector('#text17').value;
  localStorage.setItem('hour-17', text);
}
document.querySelector('#btn18').onclick = function() {
  var text = document.querySelector('#text18').value;
  localStorage.setItem('hour-18', text);
}
document.querySelector('#btn19').onclick = function() {
  var text = document.querySelector('#text19').value;
  localStorage.setItem('hour-19', text);
}
document.querySelector('#btn20').onclick = function() {
  var text = document.querySelector('#text20').value;
  localStorage.setItem('hour-20', text);
}
document.querySelector('#btn21').onclick = function() {
  var text = document.querySelector('#text21').value;
  localStorage.setItem('hour-21', text);
}
document.querySelector('#btn22').onclick = function() {
  var text = document.querySelector('#text22').value;
  localStorage.setItem('hour-22', text);
}