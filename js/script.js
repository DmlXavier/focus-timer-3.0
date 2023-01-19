import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import {
	body,
	minutesDisplay,
	secondsDisplay,
	darkBtn,
	lightBtn,
	playBtn,
	pauseBtn,
	stopBtn,
	setBtn,
	plusBtn,
	minusBtn,
	forestBtn,
	rainBtn,
	coffeeBtn,
	fireBtn,
	forestSlider,
	rainSlider,
	coffeeSlider,
	fireSlider
} from "./elements.js"


const controls = Controls({
	playBtn, 
	pauseBtn, 
	stopBtn, 
	setBtn,
	body,
	darkBtn,
	lightBtn
})

const timer = Timer({
	minutesDisplay, 
	secondsDisplay,
	resetControls: controls.reset,
	check: controls.checkInput
})

const sounds = Sound()


// Toggle dark/light mode
lightBtn.addEventListener('click', () => {
	controls.toggleDarkMode()
})

darkBtn.addEventListener('click', () => {
	controls.toggleDarkMode()
})


// Timer controls
playBtn.addEventListener('click', () => {
	sounds.buttonPressed()
	controls.play()
	timer.countdown()
})

pauseBtn.addEventListener('click', () => {
	sounds.buttonPressed()
	controls.pause()
	timer.stop()
})

stopBtn.addEventListener('click', () => {
	controls.reset()
	timer.reset()
	sounds.buttonPressed()
})

setBtn.addEventListener('click', () => {
	sounds.buttonPressed()
	let newTime = controls.setTimer()
	
	if (!newTime) {
		timer.reset()
		return
	}

	timer.updateValues(newTime.newMinutes, newTime.newSeconds)
	timer.updateDisplay(newTime.newMinutes, newTime.newSeconds)
})

plusBtn.addEventListener('click', () => {
	sounds.buttonPressed()
	timer.addFiveMin()
})

minusBtn.addEventListener('click', () => {
	sounds.buttonPressed()
	timer.subFiveMin()
})


// Sound controls
forestBtn.addEventListener('click', () => {
	controls.selectSound(forestBtn, sounds.forest)
})

rainBtn.addEventListener('click', () => {
	controls.selectSound(rainBtn, sounds.rain)
})

coffeeBtn.addEventListener('click', () => {
	controls.selectSound(coffeeBtn, sounds.coffee)
})

fireBtn.addEventListener('click', () => {
	controls.selectSound(fireBtn, sounds.fire)
})

forestSlider.addEventListener('input', () => {
	sounds.adjustVolume(forestSlider, sounds.forest)
})

rainSlider.addEventListener('input', () => {
	sounds.adjustVolume(rainSlider, sounds.rain)
})

coffeeSlider.addEventListener('input', () => {
	sounds.adjustVolume(coffeeSlider, sounds.coffee)
})

fireSlider.addEventListener('input', () => {
	sounds.adjustVolume(fireSlider, sounds.fire)
})