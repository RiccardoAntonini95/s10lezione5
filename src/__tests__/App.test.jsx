import SearchPage from "../components/SearchPage";
import { render,screen } from "@testing-library/react";

//I 3 componenti esempio vengono renderizzati correttamente
describe("I 3 componenti nella search page", () => {
    it("vengono correttamente renderizzati", () => {
        render(<SearchPage />)
        const hongKongText = screen.getByText(/Hong Kong/i)
        expect(hongKongText).toBeInTheDocument()
    })
})
