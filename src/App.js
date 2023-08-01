import Header from "./components/header/Header";
import MeelsSummary from "./components/meels-summary/MeelsSummary";
import Meels from "./components/meels/Meels";


  const DUMMY_MEALS = [
      {
          id: 1,
          title: "Sushi",
          description: "finest fish and veggies",
          price: 22.99,
      },
      {
          id: 2,
          title: "Pizza",
          description: "a german specialty!",
          price: 16.0,
      },
      {
          id: 3,
          title: "Barbecue",
          description: "american, raw,, meaty",
          price: 12.99,
      },
      {
          id: 4,
          title: "Green Bowl",
          description: "healthy...and green...",
          price: 19.99,
      }
  ]

function App() {
  return (
    <div >
      <Header />
      <MeelsSummary />
      <Meels meals={DUMMY_MEALS}/>

    </div>
  );
}

export default App;
