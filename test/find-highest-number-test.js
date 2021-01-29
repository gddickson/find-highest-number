var assert = require("chai").assert;
var expect = require("chai").expect;

// Put your CUT here
class MaxNumber
{
    maxNumber( numberArray )
    {
        //let min=1000000;
        let max=0;

        if (numberArray.length == 1){
            return numberArray[0];
        }

        for(let i=0; i< numberArray.length; i++){
            console.log(numberArray[i]);

            if (numberArray[i] > max){
                max = numberArray[i];
            }

            console.log(max);
        }

        return max;
    }

}

describe('find the highest number', function() {
    it('If the input were {7, 13}  then the result should be 13', function() {
        // arrange...
        var cut = new MaxNumber();
        var expectedResult = 13
        
        var testArray = [7,13];

        // act...
        var actualResult = cut.maxNumber( testArray );
        console.log( actualResult);

        // assert...
        expect(actualResult).to.eql(expectedResult);
    });

    it('If the input were {13, 4}  then the result should be 13', function() {
        // arrange...
        var cut = new MaxNumber();
        var expectedResult = 13
        //var testArray = [4, 5, -8, 3, 11, -21, 6];
        var testArray = [13,4];

        // act...
        var actualResult = cut.maxNumber( testArray );
        console.log( actualResult);

        // assert...
        expect(actualResult).to.eql(expectedResult);
    });

    it('If the input were {4, 5, -8, 3, 11, -21, 6} the result should be 11', function() {
        // arrange...
        var cut = new MaxNumber();
        var expectedResult = 11
        var testArray = [4, 5, -8, 3, 11, -21, 6];
        

        // act...
        var actualResult = cut.maxNumber( testArray );
        console.log( actualResult);

        // assert...
        expect(actualResult).to.eql(expectedResult);
    });

    it('If several numbers are equal and highest, only one should be returned', function() {
        // arrange...
        var cut = new MaxNumber();
        var expectedResult = 3
        var testArray = [1, 1, 2, 2, 3, 3];
        

        // act...
        var actualResult = cut.maxNumber( testArray );
        console.log( actualResult);

        // assert...
        expect(actualResult).to.eql(expectedResult);
    });

    it('single item in array, return that item', function() {
        // arrange...
        var cut = new MaxNumber();
        var expectedResult = 1
        var testArray = [1];

        // act...
        var actualResult = cut.maxNumber( testArray );
        console.log( actualResult);

        // assert...
        expect(actualResult).to.eql(expectedResult);
    });
});