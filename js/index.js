let container = document.querySelector('.container');
let button = document.querySelectorAll('.navbar');
let url = './partials/partial-1.html';

function changePage(e){
    e.preventDefault();
    let clickButton = e.target;
    url = clickButton.href;
    loadData();
}

for (let buttonItem of button ){
    buttonItem.addEventListener('click', changePage);
}

function loadData() {
	fetch(url)
		.then(function (response){
			return response.text();
		})
		.then(function (data) {
			container.innerHTML = data;
		});
};
loadData();

