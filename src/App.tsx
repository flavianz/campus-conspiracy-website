import "./App.css";
import SkinPink from "./assets/skin_pink.png";
import Sabotage from "./assets/Button_Sabotage.png";

export default function App() {
    return (
        <div id="container">
            <h1>Campus Conspiracy</h1>
            <div className="paragraph left">
                <div>
                    <h2>The Exams</h2>
                    <p>
                        It's like every time. All semester, you did nothing but
                        hang around and party. Studying is for losers. Who even
                        attends lectures nowadays?
                        <br />
                        <br />
                        But like every semester, at the end, the final exams are
                        coming. In fact, they start next week. This is waaaay
                        too much to handle. <br />
                        <br />
                        But what if there way another way?
                    </p>
                </div>
                <img src={SkinPink} alt="A pink among us skin" />
            </div>
            <div className="paragraph right">
                <img src={Sabotage} alt="A pink among us skin" />
                <div>
                    <h2>There is.</h2>
                    <p>
                        What if the exams didn't happen at all?
                        <br /> Or if you magically got the questions beforehand?
                        <br />
                        <br />
                        As it seems, you and up to 9 of your friends have a
                        plan. To sabotage the exams and cheat yourselves through
                        the exams. But while executing your plan, you start to
                        notice some strange things happening. Could it be? Could
                        there be a traitor among us..?
                    </p>
                </div>
            </div>
        </div>
    );
}
