import { useState } from "react";
import "./assets/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container_App">
        <div className="search">
          <form className="searching">
            <div>
             <input type="text" />
            </div>
            <div class="input-group-append">
             <button>Buscar</button>
            </div>
        </form>
        </div>
        <div className="result">
          <div className="container_table">
            <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
