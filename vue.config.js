module.exports = {
	publicPath: './',
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'network': '@/network',
				'views': '@/views',
				'plugins': '@/plugins',
				'pages': '@/pages'
			}
		}
	},
	pwa: {
		iconPaths: {
			favicon32: 'favicon.ico',
			favicon16: 'favicon.ico',
			appleTouchIcon: 'favicon.ico',
			maskIcon: 'favicon.ico',
			msTileImage: 'favicon.ico'
		}
	},
	chainWebpack: config => {
		config.plugin('html')
			.tap(args => {
				args[0].title = "OpenAPI-XSYD";
				return args;
			})
	}
}
