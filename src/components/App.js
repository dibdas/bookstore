import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <BooksList />
        <BooksForm />
      </div>
    </>
  );
}
export default App;
