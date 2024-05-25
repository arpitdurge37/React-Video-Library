import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export function AdminDashBoard(){


    const [videos, setVideos] = useState([{VideoId:0, Title:'', Url:'', Description:'', Views:0, Likes:0, Dislikes:0, CategoryId:0}])
   

    function LoadVideos(){
        axios.get('http://127.0.0.1:3030/get-videos')
        .then(response=>{
            setVideos(response.data);
        })
    }

    useEffect(()=>{
        LoadVideos();
    },[])

    function handleDeleteClick(id){
        axios.delete(`http://127.0.0.1:3030/delete-video/${id}`)
        .then(()=>{
            alert('Video Deleted..');
            window.location.reload();
        })
    }

    return(
        <div>
            <h5 className="text-center">Admin Dash Board</h5>
            <Link to="/add-video" className="bi bi-camera-video-fill btn btn-light"> Add New</Link>
            <table className="table table-hover">
                <thead>
                    <th>Title</th>
                    <th>Preview</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                   {
                    videos.map(video=>
                      <tr>
                        <td>{video.Title}</td>
                        <td><iframe width="400" height="100" src={video.Url}></iframe></td>
                        <td>
                            <Link to={`/edit-video/${video.VideoId}`} className="bi bi-pen btn btn-warning"></Link>
                            <button onClick={()=>{ handleDeleteClick(video.VideoId) }} className="bi bi-trash btn btn-danger ms-2"></button>
                        </td>
                      </tr>
                    )
                   }
                </tbody>
            </table>
        </div>
    )
}