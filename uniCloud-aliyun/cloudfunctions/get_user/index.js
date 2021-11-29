'use strict';

const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('demo');
	const res = await collection.get()

	//返回数据给客户端
	return {
		code: 200,
		list: res.data
	}
};
