import Sound from "./sounds.js"


export default function Timer({minutesDisplay, secondsDisplay, resetControls, check}) {
	let minutes = Number(minutesDisplay.textContent)
	let seconds = Number(secondsDisplay.textContent)
	let timerTimeOut

	function countdown() {
		timerTimeOut = setTimeout(() => {
			let minutes = Number(minutesDisplay.textContent)
			let seconds = Number(secondsDisplay.textContent)

			if (minutes == 0 && seconds == 0) {
				reset()
				resetControls()
				Sound().timeUp()
				return
			}

			if (seconds == 0) {
				seconds = 60
				--minutes
			}

			updateDisplay(minutes, seconds - 1)

			countdown()
		}, 1000)
	}

	function stop() {
		clearTimeout(timerTimeOut)
	}

	function updateDisplay(minutes, seconds) {
		minutesDisplay.textContent = (String(minutes).substring(0, 2)).padStart(2, '0')
		secondsDisplay.textContent = (String(seconds).substring(0, 2)).padStart(2, '0')
	}

	function updateValues(newMinutes, newSeconds) {
		minutes = Number(newMinutes)
		seconds = Number(newSeconds)
	}

	function reset() {
		updateDisplay(minutes, seconds)
		stop()
	}

	function addFiveMin() {
		updateValues(minutes + 5, 0)

		let valid = check(minutes, seconds)

		if (!valid) {
			updateValues(99, 0)
			updateDisplay(99, 0)
			return
		}

		updateDisplay(minutes, seconds)
	}

	function subFiveMin() {
		updateValues(minutes - 5, 0)
		
		let valid = check(minutes, seconds)

		if (!valid) {
			updateValues(0, 0)
			updateDisplay(0, 0)
			return
		}

		updateDisplay(minutes, seconds)
	}

	return {
		countdown, 
		stop, 
		reset, 
		updateDisplay, 
		updateValues, 
		addFiveMin, 
		subFiveMin
	}
}