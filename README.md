### Api接口生成器

```api-export```

---

#### 功能

根据 YAPI 管理平台直接生成前端可使用的代码

### 导出结果(自动生成)

```js
class ApiManager {
        constructor(httpProxy) {
                this.httpProxy = httpProxy
        }

        _format(route) {
                return this.httpProxy(route)
        }

        /**
     * {{获取个人捐赠祝福语详情}}
     */
    getApiManagerBlessing (params) {
            return this._format({
                url: '/api/manager/blessing',
                data: params,
                method: 'GET'
            })
        }

        /**
     * {{设置个人捐赠祝福语}}
     */
    postApiManagerBlessing (params) {
            return this._format({
                url: '/api/manager/blessing',
                data: params,
                method: 'POST'
            })
        }
    ...
}
```

### 如何导出文件

```js
const Syncwe = require('@util/api-export')

const sync = new Syncwe(
    'http://yapi.campus.com',
    'cn.coder@tom.com',
    'api2020'
)

sync.saveAs('./out_files')
```

### 项目中如果使用

```js
// 导出的文件
const Api = require('out_files/users')

const axios = require('axios')

const service = axios.create({
    baseUrl: 'https://syncwe.com',
    timeout: 5000
})

const api = new Api(service)

//
api.getApiInformationCertification({})
.then(data => console.log(data.data))
.catch(err => console.log(err))
```

### 建议

```shell
cn.coder@tom.com
```

