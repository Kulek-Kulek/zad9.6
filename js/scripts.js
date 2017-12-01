

var list = document.getElementById('list');
var add = document.getElementById("addElem");
add.addEventListener('click', function(e) {
	var element = document.createElement('li');
	element.innerHTML = 'item1';
	element.innerHTML = "item " + document.getElementsByTagName('li').length;


	list.appendChild(element);

});














function checkOnclickEvent(param) {
  console.log(param);
}
var inputElem = document.getElementById('js-inputValue'),
    imageElem = document.getElementById('js-image');

imageElem.addEventListener('click', function(e) {
  checkOnclickEvent('image was clicked')
});

inputElem.addEventListener('keypress', function(e) {
  e.target.value += ' test ';
});