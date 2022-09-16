const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const sourceDir = './src/img/';
const destinationDir = './dist/img/';
(async () => {
	await imagemin([sourceDir + '*.{jpg,png}'], {
		destination: destinationDir,
		plugins: [
			imageminWebp({quality: 50})
		]
	});
})();