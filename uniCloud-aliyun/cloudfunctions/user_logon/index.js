'use strict';

const db = uniCloud.database();

exports.main = async (event, context) => {
	const collection = db.collection('user');

	const {
		from
	} = event;

	var mm = Math.floor(Math.random() * 10000);

	const def = {
		"article_ids": [],
		"article_likes_ids": [],
		"author_likes_ids": [],
		"author_name": "用户" + mm,
		"avatar": "//img3.sycdn.imooc.com/54584e2c00010a2c02200220-160-160.jpg",
		"explain": "",
		"fans_count": 0,
		"follow_count": 0,
		"gender": "男",
		"integral_count": "",
		"label_ids": [],
		"professional": "全栈工程师",
		"status": "normal",
		"thumbs_up_article_ids": []
	}

	collection.add({
		loginName: from.name,
		password: from.password,
		...def
	});
	return {
		code: 200,
	}
};
