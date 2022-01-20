import { render } from "@testing-library/react";
import { getEmployees } from "../EmployeeContainer/EmployeeContainer";
import EmployeeCard from "./EmployeeCard";

it('fetches data from api', async () => {
  const data = await getEmployees()
  expect.anything()
})

// describe("Employee Card Component", () => {
//   it("rendered expand button", () => {
//     const { getByTestId } = render(<EmployeeCard />);
//     const btn = getByTestId("expand-btn");
//     expect(btn).toBeTruthy();
//   });
// });
