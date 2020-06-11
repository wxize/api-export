// 该类为工具生成的，不可修改
// 生成的结构

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

	/**
     * {{个人协议、项目协议签署数量查询接口}}
     */
    getApiManagerAgreeNum (params) {
            return this._format({
                url: '/api/manager/agree/num',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{个人协议详情接口}}
     */
    getApiManagerAgreeDetails (params) {
            return this._format({
                url: '/api/manager/agree/details/' + params.id,
                data: {},
                method: 'GET'
            })
        }

	/**
     * {{创建协议}}
     */
    postApiManagerAgree (params) {
            return this._format({
                url: '/api/manager/agree',
                data: params,
                method: 'POST'
            })
        }

	/**
     * {{删除恢复协议接口}}
     */
    postApiManagerAgreeUpdate (params) {
            return this._format({
                url: '/api/manager/agree/update',
                data: params,
                method: 'POST'
            })
        }

	/**
     * {{协议列表接口}}
     */
    getApiManagerAgree (params) {
            return this._format({
                url: '/api/manager/agree',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{协议模板下载接口}}
     */
    getApiManagerAgreeWord (params) {
            return this._format({
                url: '/api/manager/agree/word/' + params.id,
                data: {},
                method: 'GET'
            })
        }

	/**
     * {{协议签署详情接口}}
     */
    getApiManagerAgreeAgreeNo (params) {
            return this._format({
                url: '/api/manager/agree/agreeNo',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{协议管理列表导出接口}}
     */
    getApiManagerAgreeDownLoad (params) {
            return this._format({
                url: '/api/manager/agree/down/load',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{协议项目列表}}
     */
    getApiManagerAgreeItem (params) {
            return this._format({
                url: '/api/manager/agree/item',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{编辑协议}}
     */
    putApiManagerAgreeUpdate (params) {
            return this._format({
                url: '/api/manager/agree/update/' + params.id,
                data: {},
                method: 'PUT'
            })
        }

	/**
     * {{项目创建协议选择接口}}
     */
    getApiManagerAgreeName (params) {
            return this._format({
                url: '/api/manager/agree/name',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{项目捐赠协议列表导出接口}}
     */
    getApiManagerAgreeDownLoadItem (params) {
            return this._format({
                url: '/api/manager/agree/down/load/item',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{修改基金信息}}
     */
    putApiManagerFund (params) {
            return this._format({
                url: '/api/manager/fund/' + params.id,
                data: {},
                method: 'PUT'
            })
        }

	/**
     * {{分页获取基金列表}}
     */
    getApiManagerFund (params) {
            return this._format({
                url: '/api/manager/fund',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{创立基金}}
     */
    postApiManagerFund (params) {
            return this._format({
                url: '/api/manager/fund',
                data: params,
                method: 'POST'
            })
        }

	/**
     * {{单个基金详情}}
     */
    getApiManagerFund (params) {
            return this._format({
                url: '/api/manager/fund/' + params.id,
                data: {},
                method: 'GET'
            })
        }

	/**
     * {{基金启停接口}}
     */
    putApiManagerFund (params) {
            return this._format({
                url: '/api/manager/fund',
                data: params,
                method: 'PUT'
            })
        }

	/**
     * {{基金导出接口}}
     */
    getApiManagerFundDownLoad (params) {
            return this._format({
                url: '/api/manager/fund/down/load',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{项目创建基金选择}}
     */
    getApiManagerFundName (params) {
            return this._format({
                url: '/api/manager/fund/name',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{公示详情接口}}
     */
    getApiManagerOrderPublicityDetails (params) {
            return this._format({
                url: '/api/manager/order/publicity/details',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{分页捐赠公示接口}}
     */
    getApiManagerOrderPublicity (params) {
            return this._format({
                url: '/api/manager/order/publicity',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{发布/撤销公示信息}}
     */
    putApiManagerOrderPublicity (params) {
            return this._format({
                url: '/api/manager/order/publicity/' + params.id,
                data: {},
                method: 'PUT'
            })
        }

	/**
     * {{导出个人捐赠信息接口}}
     */
    getApiManagerOrderDownLoad (params) {
            return this._format({
                url: '/api/manager/order/down/load',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{订单列表}}
     */
    getApiManagerOrder (params) {
            return this._format({
                url: '/api/manager/order',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{订单详情}}
     */
    getApiManagerOrder (params) {
            return this._format({
                url: '/api/manager/order/' + params.id,
                data: {},
                method: 'GET'
            })
        }

	/**
     * {{对帐管理详情接口}}
     */
    getApiAccount (params) {
            return this._format({
                url: '/api/account/' + params.id,
                data: {},
                method: 'GET'
            })
        }

	/**
     * {{对账管理列表}}
     */
    getApiAccount (params) {
            return this._format({
                url: '/api/account',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{导出接口}}
     */
    getApiAccountDownLoad (params) {
            return this._format({
                url: '/api/account/down/load',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{修改项目信息}}
     */
    putApiManagerItem (params) {
            return this._format({
                url: '/api/manager/item/' + params.id,
                data: {},
                method: 'PUT'
            })
        }

	/**
     * {{分页查询项目捐赠列表接口}}
     */
    getApiManagerItem (params) {
            return this._format({
                url: '/api/manager/item',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{创建项目}}
     */
    postApiManagerItem (params) {
            return this._format({
                url: '/api/manager/item',
                data: params,
                method: 'POST'
            })
        }

	/**
     * {{单个项目详情}}
     */
    getApiManagerItem (params) {
            return this._format({
                url: '/api/manager/item/' + params.id,
                data: {},
                method: 'GET'
            })
        }

	/**
     * {{项目启停接口}}
     */
    putApiManagerItem (params) {
            return this._format({
                url: '/api/manager/item',
                data: params,
                method: 'PUT'
            })
        }

	/**
     * {{项目捐赠下载接口}}
     */
    getApiManagerItemDownLoad (params) {
            return this._format({
                url: '/api/manager/item/down/load',
                data: params,
                method: 'GET'
            })
        }

	/**
     * {{项目选择接口}}
     */
    getApiManagerItemName (params) {
            return this._format({
                url: '/api/manager/item/name',
                data: params,
                method: 'GET'
            })
        }

	// ~~ 
}

export default ApiManager