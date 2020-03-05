import React, {useEffect, useState} from "react";
import CommentsList from "./CommentsList";

function Comments() {

    const [comments, setComments] = useState([]);

    useEffect(() => {

        getComments().then(r => {
            setComments(r);
        });
    },[]);

    async function getComments() {
        const response = (await fetch('http://localhost:8081/comment?count=3')).json();

        return response;
    }

    return (
        <section>
            <div className="block gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="heading">
                                <h2>Yorumlar</h2>
                            </div>
                            <div className="testimonialsec">
                                <ul className="tes-for">
                                    <CommentsList/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Comments;