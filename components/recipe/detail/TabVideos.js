import { Play } from 'react-bootstrap-icons'
import Link from 'next/link'

const TabVideos = ({ videos = [], recipeId }) => {
  return (
    <>
      <ul className="d-flex flex-column gap-3">
        {videos.map((video, index) => (
          <Link  key={video.videoId} href={`/recipes/${recipeId}/videos/${video.videoId}`}>
            <li className="d-flex gap-3 p-2 rounded-4 bg-verylightgray cursor-pointer">
              <div className="bg-primary rounded-4 p-3" style={{ height: 60, width: 60 }}>
                <Play size={32} color="white" />
              </div>
              <div className="">
                <h5 className="text-gray fw-normal mb-1">Step {index+1}</h5>
                <p className="mb-0">{video.title}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  )
}

export default TabVideos
