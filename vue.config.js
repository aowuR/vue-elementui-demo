// vue.config.js
module.exports = {
	lintOnSave: false,
	devServer: {
		proxy: {

			'/devApi': {

				target: "http://www.web-jshtml.cn/productapi",

				changeOrigin: true,

				pathRewrite: {

					"^/devApi": ""

				}

			},


		}, // string | Object

		before: app => {}

	}
}