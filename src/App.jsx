import { createSignal, onMount } from "solid-js";
import Book from "./compoents/Book";

function App() {

  const [books, setBooks] = createSignal([]);

  onMount(async () => {
    try {
      const raw = await fetch(`http://localhost:8000/books/`);
      const data = await raw.json();
      setBooks(data.books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  })

  return (
    <div class="">
      <div class="flex flex-row">
        <div class="bg-blue-300 flex-1 p-8 text-center text-2xl">
          <p>Book App Thing</p>
        </div>
      </div>
      <div className="flex flex-wrap m-2 justify-center">
        {books().map((book, i) => {
          return (
            <Book key={i} book={book} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
