describe("Employee Container Tests", () => {
  it("fetches data properly", () => {
    const data = fetch("api/employees")
      .then((res) => res.json())
      .then((json) => setData(json.employees));
      expect(data).toBeDefined()
  });
});