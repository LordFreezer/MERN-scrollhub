import FileBase from 'react-file-base64';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTheme } from '@mui/system';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { createPost, updatePost } from '../../actions/posts';
import './styles.css'
const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: '',
    });
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const theme = createTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) {
            setPostData(post);
        }
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePost(currentId, postData));
        }
        else {
            dispatch(createPost(postData));
        }
        clear();
    }
    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    }
    return (
        <Paper sx={{
            padding: theme.spacing(2),
        }}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Scroll</Typography>
                <TextField name="creator" varient="outlined"
                    label="Creator" fullWidth
                    value={postData.creator} onChange={(e) => setPostData({
                        ...postData, creator: e.target.value
                    })}
                />
                <TextField name="title" varient="outlined"
                    label="Title" fullWidth
                    value={postData.title} onChange={(e) => setPostData({
                        ...postData, title: e.target.value
                    })}
                />
                <TextField name="message" varient="outlined"
                    label="Message" fullWidth
                    value={postData.message} onChange={(e) => setPostData({
                        ...postData, message: e.target.value
                    })}
                />
                <TextField name="tags" varient="outlined"
                    label="Tags" fullWidth
                    value={postData.tags} onChange={(e) => setPostData({
                        ...postData, tags: e.target.value.split(',')
                    })}
                />
                <div className='fileinput'>
                    <FileBase type="file" multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button sx={{
                    marginBottom: 1,
                }}
                    variant="contained" color="primary"
                    size="large" type="submit" fullWidth>
                    Submit
                </Button>
                <Button
                    variant="contained" color="secondary"
                    size="small" onClick={clear} fullWidth>
                    Clear
                </Button>
            </form>
        </Paper >
    );
}

export default Form;
