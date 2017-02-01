let mix = require('laravel-mix');

mix.setPublicPath('dist')
	.js('src/app.js', '/')
	.copy('src/img', 'dist/img')
   	.sass('src/app.scss', 'dist/');