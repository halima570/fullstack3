import React, { useState } from 'react'
import { connect } from 'react-redux';
function dispatcher(post){
    return {type: 'ADD_ARTICLE',payload: post}
}
const mapDispatchToProps = dispatch => {
    return {
        addArticle: post => dispatch(dispatcher(post))
    }
}
const CreatePost = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');
    const handleSubmit = () => {
        props.addArticle({
            id: Date.now(),
            title,
            content,
        })    }
   
    return (
        <>            <div>

                <label htmlFor="Title">Title</label>
                <input type="text" name="title" id="title" onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="Content">Content:</label>
                <textarea name="content" id="content" cols="30" rows="10" onChange={e => setContent(e.target.value)} />
            </div>
            <div>
                <button onClick={handleSubmit} type="button" value="Add" >submit</button>
            </div>
            </>)}
export default connect(null, mapDispatchToProps)(CreatePost)
