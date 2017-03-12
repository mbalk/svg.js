'use strict'

/*
	 THIS SCRIPT WILL DETECT OS and install OS specific test dependencies
	 IF --production IS PASSED npm install THEN THIS SCRIPT WILL EXIT
*/
const log = console.log
const exec = require('child_process').exec
const logger = (err, stdout, stderr) => {
	if(err) {
		console.error(err)
		return
	}
	log(stdout)
}

main()

function main() {
	if (process.env['npm_config_production'])
			log('Production install. Not installing test dependencies.')
	
	else detect()
}

function detect() {

	switch(process.platform) {
		case 'win32':
			log('Windows detected.')

			// if OS is Windows7 then only run tests in IE11
			if(require('os').release().startsWith('7.')) {

				log('Windows 7 detected.')
				log('Installing Microsoft IE11 test launcher.')
				install('karma-ie-launcher')

			}	else {

				log('Installing Microsoft IE11 and Edge test launcher.')
				install('karma-ie-launcher karma-edge-launcher')

			}

			break

		case 'linux':
			log('Linux detected.')
		case 'darwin':
			log('*macOS detected.')
		default:

			// nothing yet;

			break
	}

}

function install(packageString) {
	exec('npm install --production ' + packageString, logger)	
}
