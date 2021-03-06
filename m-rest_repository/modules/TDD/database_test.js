var exports = module.exports = {};
var tseed = require(global.config.__base + 'modules/database/seeds/TestSeeds');

var db = require(global.config.__base + 'modules/database/Repository/DatabaseHelper.js');

exports.Test   = {

	DELETEAll: function(callback){
		db.helper.DELETE(tseed.schema,{},callback);
	},
	DELETE: function(callback){
		db.helper.DELETE(tseed.schema,{UserID:"nasihere"},callback);
	},
	FIND: function(callback){
		db.helper.FIND(tseed.schema,{UserID:"nasihere"},callback);
	},
	POST: function(callback){
		db.helper.POST(tseed.schema,tseed.data.test,callback);		
	},
	GET: function(callback){
		db.helper.GET(tseed.schema,callback);	
	},
	PUT: function(callback){
		db.helper.PUT(tseed.schema,tseed.data.update, {UserID:"nasihere"}, callback);	
	}

}; 


exports.RunTest = function(){
	exports.Test.DELETEAll(function(data){
	console.log(data);


	exports.Test.POST(function(data){
		console.log(data);


		exports.Test.FIND(function(data){
			console.log(data);

			exports.Test.PUT(function(data){
				console.log(data);

				exports.Test.DELETE(function(data){
					console.log(data);					
				})
			});

		});

	});
});
}