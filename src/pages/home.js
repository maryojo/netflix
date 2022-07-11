import Main from "../components/main";
import Row from "../components/Row";
import requests from "../requests";

const Home = () => {
  return (
    <div>
      <Main/>
      <Row rowID="1" title="Upcoming" fetchURL={requests.requestUpcoming}/>
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular}/>
      {/* <Row rowID="3" title="Latest" fetchURL={requests.requestLatest}/> */}
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated}/>
      <Row rowID="5" title="Trending" fetchURL={requests.requestTrending}/>

    </div>
  )
}

export default Home;