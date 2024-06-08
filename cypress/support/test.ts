import { getTest } from "./helper"

const method = getTest.method
const url = getTest.url

export const getGroceryData = {
    checkDataFromAPI(productId) {
        cy.request({
            method,
            url
        }).then((response) => {
            console.log('response max', response)
            const res = response.body

            const product = res[1].id===productId
            expect(product).to.exist;
        })
    }
}