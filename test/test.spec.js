const chai = require('chai')
const expec = chai.expect;
const interestRate = require('../interestRate');

describe('interestRate()', () => {
    it('paga-se 5% de juros até 30 dias de atraso', () => {
        interestRate.fivePercent('30')
        expec(interestRate.fivePercent('30')).to.equal(true);
    });
    it('paga-se 10% de juros de 31 até 60 dias de atraso', () => {
        interestRate.tenPercent('52')
        expec(interestRate.tenPercent('52')).to.equal(true);
    });
    it('paga-se 15% de juros a partir de 60 dias de atraso', () => {
        interestRate.fifteenPercent('60')
        expec(interestRate.fifteenPercent('60')).to.equal(true);
    });
})