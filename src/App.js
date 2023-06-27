import './App.css';
import Item from './components/item';
import ItemDate from './components/ItemDate';

function App() {
  // const itemTwoName="Surf Excel"

  const response=[
    {
      itemname:"Nirma1",
      itemday:20,
      itemmonth:"june",
      itemyear:1997
    },
    {
      itemname:"Wheel",
      itemday:20,
      itemmonth:"April",
      itemyear:1992
    },
    {
      itemname:"Airel",
      itemday:20,
      itemmonth:"Nov",
      itemyear:1995
    }
  ];
  return (
    <div>
      <Item name={response[0].itemname}>
      Hello Jee M Hu Aapka Pehla Item
      </Item>
      <ItemDate day={response[0].itemday} month={response[0].itemmonth} year={response[0].itemyear} >
        Hello Jee M Hu Aapka Pehla Item
      </ItemDate>

      <Item name={response[1].itemname}></Item>
      <ItemDate day={response[1].itemday} month={response[1].itemmonth} year={response[1].itemyear}></ItemDate>

      <Item name={response[2].itemname}></Item>
      <ItemDate day={response[2].itemday} month={response[2].itemmonth} year={response[2].itemyear}></ItemDate>
      <div className="App">Hello Jee</div>
    </div>
  );
}

export default App;
