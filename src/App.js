import React from "react";
import MyComponent from "./components/MyComponent";
import BindingDemonstration from "./components/BindingDemonstration";
import { fetchData } from "./components/fetch";

export default class App extends React.Component {
  componentDidMount() {
    // fetch('https://api.github.com/users/chriscoyier/repos')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     // здесь вы можете выполнить любую дополнительную обработку данных или установить их в состояние вашего компонента
    //   })
    //   .catch(error => {
    //     console.error('Ошибка при загрузке данных:', error);
    //   });

    ///2 varik

    fetchData()
    .then((json) => console.log(json));
  }
  render() {
    return (
      <div className="App">
        <MyComponent /> 
        <BindingDemonstration/>

      </div>
    );
  }
}


