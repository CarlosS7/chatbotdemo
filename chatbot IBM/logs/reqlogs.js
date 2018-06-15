var watson = require('watson-developer-cloud');
const fs = require('fs');
var conversation = new watson.ConversationV1({
	username: '069d2697-205c-4018-b182-200de0b0651f',
	password: '5B2ej7oecCei',
	version: '2017-05-26'
});

var params = {
	workspace_id: '6b3e02e5-825d-4b64-be21-a290e91ffb41'
};

conversation.listLogs(params, function(err, response) {
	if (err) {
		console.error(err);
	} else {
		let data = JSON.stringify(response, null, 2);
		fs.writeFileSync('logs.json', data);
		console.log('Logs have been saved to file');
	}
});


