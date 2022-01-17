import { makeServer } from "./server";

import EmployeeContainer from "./components/EmployeeContainer/EmployeeContainer";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {

  // Initial fetch test get request before creating employee and container components
  // let [employees, setEmployees] = useState([])

  // console.log(employees);

  // useEffect(() => {
  //   fetch('api/employees')
  //     .then(res => res.json())
  //     .then(json => setEmployees(json.employees))
  // }, [])

  return (
    <div>
      <header>
        <h1>Employees</h1>
        <EmployeeContainer />
      </header>
    </div>
  );
}

export default App;
