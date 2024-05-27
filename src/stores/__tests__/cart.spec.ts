import { beforeEach, describe, expect, it } from "vitest"
import { createPinia, setActivePinia } from "pinia"
import { useCart } from "../cart"

describe("The shop store", () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it("Should not contains items", () => {
        const cart = useCart()
        expect(cart.cart.items).to.have.length(0)
    })
})