import { React, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import axios from "axios";

function Post() {
    const [postObject, setPostObjecto] = useState({});

    let { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/ById/${id}`).then((response) => {
            setPostObjecto(response.data)
    });
        }, []);

        return (
            <div className="postPage">
            <div className="leftSide">
              <div className="post" id="individual">
                <div className="title"> {postObject.title} </div>
                <div className="body">{postObject.postText}</div>
                <div className="footer">{postObject.username}</div>
              </div>
            </div>
            <div className="rightSide">Comment Section</div>
          </div>
        )
    }

export default Post