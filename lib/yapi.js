const http = require('request')
const fs = require('fs')
const ApiTemplate = fs.readFileSync('../conf/main_temp', 'utf8')
const ApiFuncTemplate = fs.readFileSync('../conf/node_temp', 'utf8')

class YApi {

	constructor(baseUrl) {
		this.baseUrl = baseUrl
		this.header = {
			"content-type": "application/json"
		}
		// 分组
		this.data = {
			group: null
		}
		this.outDir = '../out_files'
	}
	
	
	login (email,  password) {
		console.log('登录中...')
		let _this = this
		return new Promise((resolve, reject) => {
			const url = this.baseUrl + '/api/user/login'
			const ori = {
				email,
				password
			}
			http({
				url,
				method: 'POST',
				json: true,
				headers: _this.header,
				body: ori
			}, (err, res, body) => {
				if(err) {
					reject(err)
				}
				else if(res.statusCode !== 200) {
					reject(res)
				}
				else {
					console.log('登录成功')
					_this.header.Cookie = res.headers['set-cookie']
					resolve(body)
				}
			})
		})

		// http://yapi.campus.com/api/plugin/export?type=json&pid=11&status=all&isWiki=false
	}

	group () {
		console.log('获取分类')
		return new Promise((resolve, reject) => {
			const url = this.baseUrl + '/api/group/list'
			http.get({
				url,
				json: true,
				headers: this.header,
			}, (err, res, body) => {
				if(err) {
					reject(err)
				}
				else if(res.statusCode !== 200) {
					reject(res)
				}
				else {
					this.data.group = body.data
					resolve(body)
				}
			})
		})
	}

	projects (groupId)  {
		console.log('获取组' + groupId + '中的项目列表')
		return new Promise((resolve, reject) => {
			const url = this.baseUrl + '/api/project/list?group_id='+groupId+'&page=1&limit=30'
			http.get({
				url,
				json: true,
				headers: this.header,
			}, (err, res, body) => {
				if(err) {
					reject(err)
				}
				else if(res.statusCode !== 200) {
					reject(res)
				}
				else {
					let arr = this.data.group
					arr.forEach(item => {
						if (item._id === groupId) {
							item.projects = body.data.list
						}
					})
					console.log(this.data.group)
					resolve()
				}
			})
		})
	}

	download (projectId, projectName) {

		console.log('下载项目' + projectId + '中的api接口')
		return new Promise((resolve, reject) => {
			const url = this.baseUrl + '/api/plugin/export?type=json&pid='+projectId+'&status=all&isWiki=false'
			http.get({
				url,
				json: true,
				headers: this.header,
			}, (err, res, body) => {

				if(err) {
					reject(err)
				}
				else if(res.statusCode !== 200) {
					reject(res)
				}
				else {

					let m = ApiTemplate

					function loopRead(obj) {
						if(!obj.list) {
							
							let result = obj.path.match(/\{(.+?)\}/)
							if(result) {
								obj.path = obj.path.replace('/' + result[0], '')
							}
							let tempArr = obj.path.split('/')

							let funcName = obj.method.toLowerCase()

							for(let i = 0; i < tempArr.length; i++) {
								let item = tempArr[i]
								if(item) {
									funcName += item.charAt(0).toUpperCase() + item.slice(1)
								}
							}

							let url = result ? `'${obj.path}/' + params.${result[1]}` : `'${obj.path}'`
							let params = result ? '{}' : 'params'
							let str = ApiFuncTemplate.replace('{{funcName}}', funcName).replace('{{url}}', url).replace('{{method}}', obj.method).replace('{{params}}', params).replace('title', obj.title)
							m = m.replace('// ~~', str + '\n\t' + '// ~~')

						}else {
							let arr = obj.list
							arr.forEach(item => loopRead(item))
						}
					}

					loopRead({
						list: body
					})

					// 判断目录存不存在

					const dir = this.outDir + '/' + projectName
					fs.exists(dir, (exist) => {
						if(!exist) {
							fs.mkdirSync(dir)
							fs.writeFileSync(dir + '/api.js', m, (err) => { })
						}

						resolve(body)
					})
				}
			})
		})
	}
}
module.exports = YApi

