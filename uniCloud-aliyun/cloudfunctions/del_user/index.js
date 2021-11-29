'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const collection = db.collection('demo');
	const {
		username
	} = event;
	const res = await collection.where({
		username: username
	}).remove()
	return {
		code: 200,
		data: '数据删除成功'
	}
};
