import "../styles/index.scss";
import Recipes from "./Recipes";
import concert from "../images/FotoKyttaro2.jpg";

const App = () => {
    return (
        <>
        <section className="hero"></section>
        <main>
                <section>
                    <h1>Oh Hi, React</h1>
                </section>
                <img src={concert} alt="concert" width="250"/>
            <Recipes />
        </main>

        </>
    )
}

export default App;