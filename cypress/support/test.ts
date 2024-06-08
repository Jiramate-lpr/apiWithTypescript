import { getTest } from "./helper"

const getAllMethod = getTest.method
const getAllUrl = getTest.url

const getByIdMethod = getTest.method
const getByIdUrl = getTest.url

export const getAllGroceryData = {
    checkDataFromAPI(productId) {
        cy.request({
            method: getAllMethod,
            url: getAllUrl
        }).then((response) => {
            console.log('response max', response)
            const res = response.body

            const product = res[1].id===productId
            expect(product).to.exist;
        })
    }
}

export const getGroceryDataById = {
    checkDataByID(productId) {
        cy.request({
            method: getByIdMethod,
            url: getByIdUrl
        }).then((response) => {
            const res = response.body

            const product = res.id===productId
            expect(product).to.exist;
        })
    }
}