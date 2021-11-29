'use strict';
// 连接数据库
const db = uniCloud.database();

exports.main = async (event, context) => {
	// 获取数据表的集合
	const collection = db.collection('demo')

	// 解析前端传入参数
	const {
		username,
		age
	} = event;

	// 向数据表添加数据
	collection.add({
		username,
		age
	})

	return {
		code: 200,
		data: '数据添加成功'
	}
};
