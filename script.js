const squares = document.querySelector('.squares');
for (var i = 1; i < 367; i++) {
  const level = Math.floor(Math.random() * 5);  
  squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})