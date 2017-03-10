/*
	 THIS SCRIPT WILL DETECT IF THE OS IS WINDOWS AND IF YES THEN
	 INSTALL THE NESSEARY NPM MODULES TO EXECUTE THE TEST SUITE
	 IN IE11 AND EDGE
*/

if(process.platform === 'win32') {

	console.log('Windows detected. Installing Microsoft IE11 test launcher... Edge is TODO')

	const exec = require('child_process').exec
//TODO: install  karma-edge-launcher when we are on a CI server that support Edge (e.i. Windows Server 2016)
	exec('npm install --production karma-ie-launcher', (err, stdout, stderr) => {

		if(err) {
			console.error(err)
			return
		}

		console.log(stdout)

	})

}
