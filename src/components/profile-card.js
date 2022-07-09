import { Link } from "react-router-dom";


const ProfileCard = ({src, name, link}) =>{
  return(
    <div className="w-1/6 flex flex-col space-y-3">
      {/* <Link to={link}> */}
      <div className="w-full cursor-pointer h-48 bg-blue-400"></div>
      {/* </Link> */}
      <p className="text-center">{name}</p>
    </div>
  )
}

export default ProfileCard;