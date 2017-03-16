var {assert} = require("chai")
var sumArray = require("./quiz1_other")
describe("sumArray测试", function() {
	it("边界条件测试", function(){
		assert.equal(sumArray(null), 0)
		assert.equal(sumArray([ ]), 0)
		assert.equal(sumArray({n:11}), 0)
		assert.equal(sumArray(), 0)

	})

	it("基础用法测试", function() {
		assert.equal(sumArray([ 6, 2, 1, 8, 10 ]), 16)
		/// TODO 在这里补充几组单元测试
		// assert.equal(sumArray([ 6, 2, 1, 8,undefined,undefined, 10 ]), 16)
		assert.equal(sumArray([ 6, 2, 1, 8,1,10, 10 ]), 27)
		
	})

	it("负数测试", function(){
		assert.equal(sumArray([ -6, -20, -1, -10, -12  ]), -28)
		assert.equal(sumArray([  -7, -5, -2, -1, 0, 1, 2, 3, 3, 4, 6, 6, 9, 9, 10, 10, 10, 13, 15, 16, 19, 20, 21 ]), 148)
	})
})