const nakBtn = document.getElementById("nak-btn");
nakBtn.addEventListener("click", function () {
	document.body.style.backgroundImage = "url('./kiakii.jpg')";
	nakBtn.innerHTML = `<h1>kiak!</h1>`;
	document.getElementById("iframe").style.display = "block";
});
