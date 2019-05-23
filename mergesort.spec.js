
describe('Split Array function', function() {
    it('is able to split array into two halves', function(){
        expect(split([1,2])).toEqual([[1],[2]]);
    })
    it('returns an array of a single element for input array of one element', function() {
        expect(split([1])).toEqual([1]);
    })
    it('correctly splits uneven array lengths', function(){
        expect(split([1,2,3])).toEqual([[1],[2,3]])
    })
})