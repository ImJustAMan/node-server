const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const koaStatic = require('koa-static')
const fs = require('fs')

const app = new Koa
const router = new Router

app.use(cors())
app.use(koaStatic('./dist'))

const html = fs.readFileSync('./dist/index.html', 'utf-8')

router.get('/', ctx => {
	ctx.type = 'html'
	ctx.body = html
})

router.get('/getLikeList', ctx => {
	ctx.body = [
		{
			id: 1,
			intro: '宜家 贝达电视柜组合柜储物柜收纳柜文件柜 小户型现代',
			price: 480,
			pay: 38
		},
		{
			id: 2,
			intro: '创意懒人沙发单人扶手豆袋 沙发卧室椅子榻榻米可拆洗',
			price: 180,
			pay: 20
		},
		{
			id: 3,
			intro: '北欧表情/objectum/世界名 椅/贝尔托亚餐椅/伊姆斯比',
			price: 1380,
			pay: 65
		},
		{
			id: 4,
			intro: '实木床现代简约北欧落地床 日式榻榻米床双人床软靠背',
			price: 1950,
			pay: 22
		}
	]
})

router.get('/getShopCartList', ctx => {
	ctx.body = [
		{
			id: 0,
			shopName: '小米官方旗舰店',
			commodityList: [
				{
					id: 0,
					title: '小米10PRO',
					params: [
						'小米10PRO 【珍珠白】'
					],
					price: 5499,
					num: 1
				}
			]
		},
		{
			id: 1,
			shopName: '瓦袖旗舰店',
			commodityList: [
				{
					id: 1,
					title: '暗黑加绒冬季机能伞兵工装裤',
					params: [
						'5127黑色',
						'L'
					],
					price: 69,
					num: 1
				}
			]
		},
		{
			id: 2,
			shopName: '每年馆旗舰店',
			commodityList: [
				{
					id: 2,
					title: '高帮鞋秋季皮面防水2020新款',
					params: [
						'2035-白色',
						'【皮面防水】'
					],
					price: 99,
					num: 1
				},
				{
					id: 3,
					title: '高帮鞋男运动AJ棉鞋2020新款篮',
					params: [
						'5516-黑白色',
						'【皮面防水】'
					],
					price: 89,
					num: 1
				}
			]
		}
	]
})

router.get('/getWantList', ctx => {
	ctx.body = [
		{
			id: 0,
			title: '短款羽绒服',
			description: '防泼水 防污渍',
			price: 499
		},
		{
			id: 1,
			title: '短款羽绒服',
			description: '防泼水 防污渍',
			price: 499
		},
		{
			id: 2,
			title: '短款羽绒服',
			description: '防泼水 防污渍',
			price: 499
		}
	]
})

app.use(router.routes())
app.listen(2345, () => {console.log("服务已启动 http://localhost:2345 端口进行访问")})
