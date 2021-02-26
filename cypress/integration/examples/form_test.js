import { iteratee } from "lodash";

describe('AppleNOranges App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const textInput = () => cy.get('input[name=text]');
 
    it('sanity check', () => {
        expect(1+9).to.equal(10);
    })
})