const assert = require('assert');

const { expect } = require('chai');

const { add, sub, mul, div } = require('./index');



describe('add two numbers', () => {

    it('Addition of two Numbers', () => {

        const result = add(3, 3);

        expect(result).to.be.eq(6);

    });

    // it('Should Add 1 Number', () => {

    //     const result = add(3);

    //     expect(result).to.be.eq(3);

    // });

    // it('Should Add Default Value', () => {

    //     const result = add();

    //     expect(result).to.be.eq(0);

    // });

});



describe('Subtract two numbers', () => {

    it('Subtraction of two Numbers', () => {

        const result = sub(3, 3);

        expect(result).to.be.eq(0);

    });

});



describe('multiply two numbers', () => {

    it('Multiplication of two numbers', () => {

        const result = mul(3, 3);

        expect(result).to.be.eq(9);

    });

});



describe('divide two numbers', () => {

    it('Division of two numbers', () => {

        const result = div(3, 3);

        expect(result).to.be.eq(1);

    });

});

// describe('division of two numbers', () => {

//     it('It should not divide -ve numbers', () => {

//         const result = div(-9, 3);

//         expect(result).to.be.eq("it is not possible");

//     });
// })