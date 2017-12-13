var modal_map = document.getElementById('big-map');
var modal_map_open = document.getElementById('map-btn-open');
var modal_map_close = document.getElementById('map-btn-close');

var modal_form = document.getElementById('contacts-form');
var form_btn_open = document.getElementById('form-btn-open');
var form_btn_close = document.getElementById('form-btn-close');

modal_map_open.addEventListener('click', function(){
  modal_map.style.display = "flex";
})
modal_map_close.addEventListener('click', function(){
  modal_map.style.display = "none";
})

form_btn_open.addEventListener('click', function(){
  modal_form.style.display = "flex";
})
form_btn_close.addEventListener('click', function(){
  modal_form.style.display = "none";
})
