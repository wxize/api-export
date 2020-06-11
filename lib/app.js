const YApi = require('./yapi')
const UPromise = require('./util_promise')

// 
class Tasker {
	constructor(url, username, password) {
		if(!url || !username || !password) {
			console.log('参数错误')
			return 
		}
		this.url = url
		this.username = username
		this.password = password

		this.yapi = new YApi(this.url)
	}

	saveAs(dir) {
		let y = this.yapi
		y.outDir = dir
		let _this = this
		new UPromise().queue([
			() => {
				return y.login(_this.username, _this.password)//'cn.coder@tom.com', 'api2020')
			},
			() => {
				return y.group()
			},
			() => {
				return new Promise((resolve) => {
					let arr = y.data.group
					let tasks = []
					arr.forEach(async item => {
						tasks.push(() => y.projects(item._id))
					})
					tasks.push(() => new Promise((r) => {
						r()
						resolve()
					}))
					new UPromise().queue(tasks)
				})
			},
			() => {
				return new Promise((resolve) => {
					let arr = y.data.group
					let tasks = []
					arr.forEach(item => {
						let projects = item.projects
						projects.forEach(p => {
							tasks.push(() => y.download(p._id, p.name))	
						})
					})
					tasks.push(() => new Promise((r) => {
						r()
						resolve()
					}))
					new UPromise().queue(tasks)
				})
			},
			() => {
				return new Promise((resolve) => {
					console.log('下载完毕')
					resolve()
				})
			},
		])
	}
}

module.exports = Tasker
