export default function Controls({playBtn, pauseBtn, stopBtn, setBtn, body, darkBtn, lightBtn}) {
	function toggleDarkMode() {
		lightBtn.classList.toggle('hide')
		darkBtn.classList.toggle('hide')
		
		if (darkBtn.classList.contains('hide')) {
			body.classList.add('dark')
			return
		}

		body.classList.remove('dark')
	}

	function play() {
		playBtn.classList.add('hide')
		pauseBtn.classList.remove('hide')
		stopBtn.classList.remove('hide')
		setBtn.classList.add('hide')
	}

	function pause() {
		playBtn.classList.remove('hide')
		pauseBtn.classList.add('hide')
	}

	function reset() {
		playBtn.classList.remove('hide')
		pauseBtn.classList.add('hide')
		stopBtn.classList.add('hide')
		setBtn.classList.remove('hide')
	}

	function setTimer() {
		let newMinutes = prompt('How many minutes would you like to set the timer at?')
		let newSeconds = prompt('How many seconds?')
		let valid = checkInput(newMinutes, newSeconds)

		if (!valid) {
			return false
		}

		return {newMinutes, newSeconds}
	}

	function checkInput(minutes, seconds) {
		let checkIfSpaceMin = String(minutes).includes(' ')
		let checkIfSpaceSec = String(seconds).includes(' ')

		if (((minutes < 100 && minutes >= 0) && (seconds < 60 && seconds >= 0))
		&& ((minutes || minutes === 0) && (seconds || seconds === 0))
		&& (!checkIfSpaceMin && !checkIfSpaceSec)) {
			return true
		}

		return false
	}

	function selectSound(btn, sound) {
		if (btn.classList.contains('on')) {
			btn.classList.remove('on')
			sound.pause()
			return
		}

		btn.classList.add('on')
		sound.play()
	}

	return {
		toggleDarkMode,
		play, 
		pause, 
		reset, 
		setTimer, 
		checkInput,
		selectSound
	}
}