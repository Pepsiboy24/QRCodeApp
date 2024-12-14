const popup = document.querySelector("[data-popup]")
const closePopup = document.querySelector("[data-closePopup]")
const signupBtn = document.querySelector("[data-signupBtn]")

signupBtn.addEventListener("click", () => {
	popup.classList.add("hide");
})
closePopup.addEventListener("click", () => {
	popup.classList.remove("hide");
})