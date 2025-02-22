// Defaults
const defaultOptions = {
	format: 'image/png',
	quality: 0.92,
	width: undefined,
	height: undefined,
	Canvas: undefined,
	crossOrigin: undefined
};

// Return Promise
export const mergeImages = (sources = [], options = {}) => new Promise(resolve => {
	options = Object.assign({}, defaultOptions, options);

	// Setup browser/Node.js specific variables
	const canvas = options.Canvas ? new options.Canvas() : window.document.createElement('canvas');
	const Image = options.Image || window.Image;

	// Load sources
	const images = sources.map(source => new Promise((resolve, reject) => {
		// Convert sources to objects
		if (source.constructor.name !== 'Object') {
			source = { src: source };
		}

		// Resolve source and img when loaded
		const img = new Image();
		img.crossOrigin = options.crossOrigin;
		img.onerror = () => reject(new Error('Couldn\'t load image'));
		img.onload = () => resolve(Object.assign({}, source, { img }));
		img.src = source.src;
	}));

	// Get canvas context
	const ctx = canvas.getContext('2d');

	// When sources have loaded
	resolve(Promise.all(images)
		.then(images => {
			// Set canvas dimensions
			const getSize = dim => options[dim] || Math.max(...images.map(image => image.img[dim]));
            const wid = getSize('width') * 2;
            const hei = getSize('height') * 2;
			canvas.width = wid * 3;//getSize('width');
			canvas.height = hei * 3; // getSize('height');
            ctx.imageSmoothingEnabled = false;

			// Draw ima3es to canvas
            var size = 3; var arrayOfArrays = [];
            for (var i=0; i<images.length; i+=size) {
                arrayOfArrays.push(images.slice(i,i+size));
            }

			arrayOfArrays.forEach((images, rowI) => {
                images.forEach((image, i) => {
                    ctx.globalAlpha = image.opacity ? image.opacity : 1;
                    return ctx.drawImage(image.img, i * wid, rowI * hei, wid , hei );
                });
            })

			if (options.Canvas && options.format === 'image/jpeg') {
				// Resolve data URI for node-canvas jpeg async
				return new Promise((resolve, reject) => {
					canvas.toDataURL(options.format, {
						quality: options.quality,
						progressive: false
					}, (err, jpeg) => {
						if (err) {
							reject(err);
							return;
						}
						resolve(jpeg);
					});
				});
			}

			// Resolve all other data URIs sync
			return canvas.toDataURL(options.format, options.quality);
		}));
});
