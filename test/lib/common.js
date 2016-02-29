
expect = require('chai').expect
async = require('async')
assert = require('assert')
var $credentials = {
	"accessKeyId": "XXXXXXXXXXXXXXXXXXXX",
	"secretAccessKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
	"region": "ap-southeast-1"
}
DynamoDB = require('../../lib/dynamodb')($credentials)
DynamoDB.on('error', function(op, error, payload ) {
	//console.log(op,error,payload)
})
DynamoDB.on('beforeRequest', function(op, payload ) {
	//console.log("--------------------------------")
	//console.log(op,payload)
})
$tableName = 'test_hash_range'
