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
	
	else install()
}

function install() {

	switch(process.platform) {
		case 'win32':
			log('Windows detected.')
			log(require('os').release())
			log('Installing Microsoft IE11 and Edge test launcher.')

			exec('npm install --production karma-ie-launcher karma-edge-launcher', logger)

			break

		case 'linux':
			log('Linux detected.')
		case 'darwin':
			log('*macOS detected.')
		default:

			;

			break
	}

}
