const should = require('should');
const sinon = require('sinon');
const DateUtil = require('./dateUtils.js');

describe('Testing DateUtil', () => {
    it('Should be an Object', (done) => {
        DateUtil.should.be.an.Object();
        DateUtil.should.have.properties(['DataManipulation', 'nextYearDayCal', 'dayCal', 'monthCal']);
        done();
    });

    it('Should internally call nextYearDayCal, dayCal, monthCal on calling DataManipulation', (done) => {
        const nextYearDayCalSpy = sinon.spy(DateUtil, 'nextYearDayCal');
        const dayCalSpy = sinon.spy(DateUtil, 'dayCal');
        const monthCalSpy = sinon.spy(DateUtil, 'monthCal');
        DateUtil.DataManipulation();
        monthCalSpy.called.should.be.true();
        nextYearDayCalSpy.called.should.be.true();
        dayCalSpy.called.should.be.true();
        done();
    });
    
});
