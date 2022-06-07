import React from 'react';
import './styles.css';
import moment from 'moment';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { Delete, ThumbUpAlt, MoreHoriz } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '15px',
            height: '100%',
            position: 'relative',
        }}>
            <CardMedia sx={{
                height: 0,
                paddingTop: '56.25%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backgroundBlendMode: 'darken',
            }}
                image={post.selectedFile} title={post.title} />

            <div className="overlay">
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className="overlay2">
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHoriz fontSize="default" />
                </Button>
            </div>
            <div className="details">
                <Typography variant='body2' color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography sx={{ padding: '0 16px' }}
                variant="h5" gutterBottom>
                {post.title}
            </Typography>
            <CardContent>
                <Typography sx={{ padding: '0 16px' }}
                    variant="body2" color="textSecondary" component="p">
                    {post.message}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    padding: '0 16px 8px 16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                }} >
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAlt fontSize="small" />
                    &nbsp;Like&nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <Delete fontSize="small" />
                    Delete
                </Button>
            </CardActions>

        </Card>
    );
}

export default Post;
