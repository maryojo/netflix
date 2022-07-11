import { Link } from "react-router-dom";


const ProfileCard = ({src, name, link}) =>{
  return(
    <div className="w-1/6 flex flex-col space-y-3">
      {/* <Link to={link}> */}
      <div className="w-full cursor-pointer w-56 h-56 bg-blue-400">
        <img alt="" src={src} className="bg-contain bg-center"/>
      </div>
      {/* </Link> */}
      <p className="">{name}</p>
    </div>
  )
}

export default ProfileCard;