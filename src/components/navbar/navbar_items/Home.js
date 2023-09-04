import "./Home.css"
import logo from "../../../assets/home.svg"

function Home () {
    return (
        <div className="home">
          <img
            className="image"
            alt="home"
            src={logo}
          />
        </div>
    )
}

export default Home;