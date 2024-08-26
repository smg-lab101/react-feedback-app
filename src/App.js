import Header from "./component/Header";
import FeedbackItem from "./component/FeedbackItem";

function App() {
    const title = "Blog Post"
    const body = "This is my blog post"
    const comments = [
        {id: 1, text: "Comment one"},
        {id: 2, text: "Comment two"},
        {id: 3, text: "Comment three"}
    ]


    return (

        <>
            <Header text={true}/>
            <div className="container">
                <h1>{title}</h1>
                <p>hi hi</p>

                <div className="comments">
                    <h3> Comments ({comments.length})</h3>
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={comment.id}> {comment.text} </li>
                        ))}
                    </ul>

                </div>
            </div>

        </>
    );
}

export default App;
