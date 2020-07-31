import React from 'react';
import PropTypes from 'prop-types';

export default function Post({id,title, deletePost}){
    return(
        <div className="Post">
            <button className="Post_delete" onClick={()=>deletePost(id)}>X</button>
            <div className="Post_title">{title}</div>
            <img className="Post_image" src={`https://source.unsplash.com/random?${id}`} alt=""/>
        </div>
    );
}
Post.prototype = {
    id: PropTypes.number.IsRequired,
    title: PropTypes.string.IsRequired,
    deletePost: PropTypes.func.isRequired
};