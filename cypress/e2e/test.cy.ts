import { getAllGroceryData, getGroceryDataById } from "../support/test";

describe('First API test',()=> {
    it('Verify status code', () => {
        cy.request('GET', 'https://simple-grocery-store-api.glitch.me/products')
        .its('status')
        .should('equal',200);
    })
    it('verify get data', ()=> {
        getAllGroceryData.checkDataFromAPI(4646)
    })
    it('verify get by id data', () => {
        getGroceryDataById.checkDataByID(1225)
    })
})