const esbuild = require('esbuild')
const { sassPlugin } = require('esbuild-sass-plugin')

async function start() {
	let ctx = await esbuild.context({
		entryPoints: ['src/index.tsx'],
		bundle: true,
		outfile: 'public/bundle.js',
		format: 'iife',
		globalName: 'App',
		minify: false,
		sourcemap: true,
		plugins: [
			sassPlugin({
				cssModules: {
					generateScopedName: '[name]__[local]__[hash:base64:5]',
				},
				output: 'public/bundle.css',
			}),
		],
	})

	await ctx.watch()

	console.log('watching for changes...')
}

start()
