const Book = ({book}) => {
    let p = 10
    return (
        <div class="border border-gray-300 rounded-sm p-10 text-center w-60 m-1 hover:bg-slate-100 cursor-pointer">
            <h4 class="text-lg">{book.title}</h4>
            <h6 class="text-sm">{book.author}</h6>
            <span>{`$ ${book.price}`}</span>
        </div>
    );
};

export default Book;
