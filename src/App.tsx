import "./App.css";
import SkinPink from "./assets/skin_pink.png";
import Sabotage from "./assets/Button_Sabotage.png";
import Map from "./assets/map.png";
import Emergency from "./assets/Emergency.png";
import LogoBig from "./assets/logo_big.png";
import Betray from "./assets/Button_Betray.png";
import Ella from "./assets/Ella.png";
import Franz from "./assets/Franz.png";
import Eren from "./assets/Eren.png";
import Flavian from "./assets/Flavian.png";

export default function App() {
    return (
        <div id="container">
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
                        But what if there was another way?
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
            <h3 style={{ marginBottom: 0, marginTop: "10vh" }}>
                SUS Uni Studios presents
            </h3>
            <img
                src={LogoBig}
                style={{
                    marginTop: 0,
                    fontSize: "4em",
                    marginBottom: "10vh",
                    height: "50vh",
                }}
                alt={"Big CC logo"}
            ></img>
            <div>
                <p>
                    Our game is a fork of the popular game "Among Us", but with
                    a twist. While the real game takes place in a space ship far
                    from earth, our game is set right in the heart of Basel.{" "}
                    <br />
                    <br />
                    <br />
                    <img
                        id={"centerImage"}
                        src={Map}
                        alt="The campus conspiracy map"
                    />
                    <br />
                    <br />
                    <br />
                    The goal of the students, which are equivalent to crew mates
                    in the original, is to sabotage the exams that are coming
                    up. However, a small number of students were already caught
                    by police and are now working undercover to eliminate the
                    other students. The students have to find the impostor among
                    them, while completing the different tasks they were all
                    assigned to complete the mission. <br />
                    <br />
                    <br />
                </p>
            </div>
            <img
                id={"centerImage"}
                src={Emergency}
                alt="The campus conspiracy emergency"
            />
            <div
                className={"paragraph left"}
                style={{ marginTop: "10vh", marginBottom: "10vh" }}
            >
                <div>
                    <h2>Jump into the action</h2>
                    <p>
                        Get down to business now and download Campus Conspiracy
                        - it's free! Invite all of your friends and see who your
                        REAL friends are - or who is secretly trying to get you
                        into jail.
                    </p>
                    <a
                        href="https://github.com/flavianz/campus-conspiracy-website/releases/download/releases/CampusConspiracy-v0.1.jar"
                        download="Campus Conspiracy.jar"
                        style={{
                            color: "white",
                            textDecoration: "underline",
                            fontSize: "1.5em",
                        }}
                    >
                        Campus Conspiracy.jar
                    </a>
                </div>
                <img src={Betray} alt="Betray button" />
            </div>
            <div>
                <h2>About us</h2>
                <p>
                    We are four students from the University of Basel. We
                    created this game for the CS-108 course "Programmierprojekt"
                    in the Spring Semester of 2025. And as seen below, we all
                    have glasses! :)
                </p>
                <div style={{ marginBottom: "10vh" }}>
                    <div className={"us-outer"}>
                        <div className="us">
                            <img src={Eren} alt="" />
                            <div>
                                <h3>Eren</h3>
                                <p>Economics Student</p>
                            </div>
                        </div>

                        <div className="us">
                            <img src={Ella} alt="" />
                            <div>
                                <h3>Ella</h3>
                                <p>Computational Sciences Student</p>
                            </div>
                        </div>
                    </div>
                    <div className="us-outer">
                        <div className="us">
                            <img src={Franz} alt="" />
                            <div>
                                <h3>Franz</h3>
                                <p>Economics Student</p>
                            </div>
                        </div>
                        <div className="us">
                            <img src={Flavian} alt="" />
                            <div>
                                <h3>Flavian</h3>
                                <p>Computer Science Student</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2>Trailer</h2>
                <iframe
                    src="https://www.youtube.com/embed/7Pd0_fGBYeI?si=vgkJH26nPqXJukRa"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
