// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗╔═══════╗   ╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝   ║ ╔╗ ╔╗ ║╚═══╗ ╔═╝║ ╔═════╝
//    ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║         ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║      ║ ║║ ║║ ║    ║ ║  ║ ╚═════╗
//    ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║         ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║      ║ ║║ ║║ ║    ║ ║  ╚═════╗ ║
//    ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗   ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║   ╔═╗║ ║║ ║║ ║╔═══╝ ║  ╔═════╝ ║
//    ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝   ╚═╝   ╚═══════╝╚═══════╝   ╚═╝   ╚═╝╚═╝╚═╝╚═╝╚═════╝  ╚═══════╝

'use strict';   // Extend JavaScript strict mode to the entire script

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔╗ ╔╗ ║║ ╔═══╗ ║║ ╔═══╗ ║║ ╔═══╗ ║╚══╗ ╔══╝
//    ║ ║   ║ ║║ ║║ ║║ ╚═══╝ ║║ ║   ║ ║║ ╚═══╝ ║   ║ ║
//    ║ ║   ║ ║║ ║║ ║║ ╔═════╝║ ║   ║ ║║ ╔═╗ ╔═╝   ║ ║
// ╔══╝ ╚══╗║ ║║ ║║ ║║ ║      ║ ╚═══╝ ║║ ║ ║ ╚═╗   ║ ║
// ╚═══════╝╚═╝╚═╝╚═╝╚═╝      ╚═══════╝╚═╝ ╚═══╝   ╚═╝

import xxxEngine from '../dist/index.js';

import chai from 'chai';

const expect = chai.expect;

// ╔═══════╗╔═══════╗╔═══════╗╔═══════╗
// ╚══╗ ╔══╝║ ╔═════╝║ ╔═════╝╚══╗ ╔══╝
//    ║ ║   ║ ╚═════╗║ ╚═════╗   ║ ║
//    ║ ║   ║ ╔═════╝╚═════╗ ║   ║ ║
//    ║ ║   ║ ╚═════╗╔═════╝ ║   ║ ║
//    ╚═╝   ╚═══════╝╚═══════╝   ╚═╝

describe('Test', function() {
    // ╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗╔════╗╔═╗         ╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗
    // ║ ╔═══╗ ║║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ╔═══╗ ║║ ╔╗ ║║ ║         ╚══╗ ╔══╝║ ╔═══╗ ║║ ║   ║ ║║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║   ║ ║   ║ ║║ ╚═══╝ ║║ ║║ ║║ ║╔═══════╗   ║ ║   ║ ╚═══╝ ║║ ║   ║ ║║ ╚═════╗
    // ║ ╔═╗ ╔═╝║ ╔═════╝   ║ ║   ║ ║   ║ ║║ ╔═╗ ╔═╝║ ║║ ║║ ║╚═══════╝   ║ ║   ║ ╔═╗ ╔═╝║ ║   ║ ║║ ╔═════╝
    // ║ ║ ║ ╚═╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║ ║ ╚═╗║ ║║ ╚╝ ║            ║ ║   ║ ║ ║ ╚═╗║ ╚═══╝ ║║ ╚═════╗
    // ╚═╝ ╚═══╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝╚═╝╚════╝            ╚═╝   ╚═╝ ╚═══╝╚═══════╝╚═══════╝

    describe('#returnTrue()', function () {
        it('Should return true when function is called', () => {
            expect(xxxEngine.returnTrue()).to.equal(true);
        });
    });

    // ╔═══════╗╔═══════╗╔═══════╗╔═╗   ╔═╗╔═══════╗╔════╗╔═╗         ╔═══════╗╔═══════╗╔═╗      ╔═══════╗╔═══════╗
    // ║ ╔═══╗ ║║ ╔═════╝╚══╗ ╔══╝║ ║   ║ ║║ ╔═══╗ ║║ ╔╗ ║║ ║         ║ ╔═════╝║ ╔═══╗ ║║ ║      ║ ╔═════╝║ ╔═════╝
    // ║ ╚═══╝ ║║ ╚═════╗   ║ ║   ║ ║   ║ ║║ ╚═══╝ ║║ ║║ ║║ ║╔═══════╗║ ╚═════╗║ ╚═══╝ ║║ ║      ║ ╚═════╗║ ╚═════╗
    // ║ ╔═╗ ╔═╝║ ╔═════╝   ║ ║   ║ ║   ║ ║║ ╔═╗ ╔═╝║ ║║ ║║ ║╚═══════╝║ ╔═════╝║ ╔═══╗ ║║ ║      ╚═════╗ ║║ ╔═════╝
    // ║ ║ ║ ╚═╗║ ╚═════╗   ║ ║   ║ ╚═══╝ ║║ ║ ║ ╚═╗║ ║║ ╚╝ ║         ║ ║      ║ ║   ║ ║║ ╚═════╗╔═════╝ ║║ ╚═════╗
    // ╚═╝ ╚═══╝╚═══════╝   ╚═╝   ╚═══════╝╚═╝ ╚═══╝╚═╝╚════╝         ╚═╝      ╚═╝   ╚═╝╚═══════╝╚═══════╝╚═══════╝

    describe('#returnFalse()', function () {
        it('Should return false when function is called', () => {
            expect(xxxEngine.returnFalse()).to.equal(false);
        });
    });
});