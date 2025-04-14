import Header from './Header/Header';
import Footer from './Footer/Footer';
import CardList from "./PersonalCards/CardList.jsx"
import './App.css'
import './Header/Header.css';
import './Footer/Footer.css';
import './PersonalCards/PersonCard.css';


const App = () => {
  return (
    <div>
     <Header />
      <main>
        <CardList />
      </main>
     <Footer />
    </div>
  );
};

export default App;