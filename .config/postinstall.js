/*
	 THIS SCRIPT WILL DETECT IF THE OS IS WINDOWS AND IF YES THEN
	 INSTALL THE NESSEARY NPM MODULES TO EXECUTE THE TEST SUITE
	 IN IE11 AND EDGE
*/

if(process.platform === 'win32') {

	console.log('Windows detected. Installing Microsoft Edge and IE11 test launchers...')

	const exec = require('child_process').exec

	exec('npm install karma-edge-launcher edge-launcher --production --save-dev', (err, stdout, stderr) => {

		if(err) {
			console.error(err)
			return
		}

		console.log(stdout)

	})

}
