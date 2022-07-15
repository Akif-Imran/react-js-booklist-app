import "./index.css";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import SegmentCard from "./components/SegmentCard";

function App() {
  return (
    <div className="ui container">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <SegmentCard>
          <BookForm />
        </SegmentCard>
      </BookContextProvider>
    </div>
  );
}

export default App;
