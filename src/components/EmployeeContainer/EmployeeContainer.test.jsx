describe("Employee Container Tests", () => {
  it("fetches data properly", () => {
    fetch("api/employees")
      .then((res) => res.json())
      .then((json) => setData(json.employees));
      expect.anything()
  });
});
