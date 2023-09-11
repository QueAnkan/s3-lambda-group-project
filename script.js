const pictureView = document.querySelector('.body_main_section-add-picture')
const pictureViewButton =document.querySelector('.header_button-picture-view')
const textView = document.querySelector('.body_main_section-add-text')
const textViewButton = document.querySelector('.header_button-text-view')


pictureViewButton.addEventListener('click', () => {
	// pictureView.style.display ='flex'
	// textView.style.display = 'none'
	pictureView.classList.remove("hidden")
	textView.classList.add("hidden")
})

textViewButton.addEventListener('click', () => {
	// pictureView.style.display =' none'
	// textView.style.display = 'flex'
	pictureView.classList.add("hidden")
	textView.classList.remove("hidden")
})