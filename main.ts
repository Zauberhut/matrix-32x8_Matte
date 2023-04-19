informatiktheater.trittmatte_pressed(informatiktheater.startbit_trittmattePort.port1, function () {
    matrix.scrollText("Hallo", 50, neopixel.colors(NeoPixelColors.Red))
})
let matrix: neopixel.Matrix = null
matrix = neopixel.create_matrix(HiwonderPins.P2, matrixSizes.medium_32x8, PowerSource.Extern)
basic.forever(function () {
	
})
