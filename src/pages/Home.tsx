import { Container } from "react-bootstrap";

function Home() {
    return (
        <div id="home" className="section">
        <Container>
            <div className="header text-center mb-5">
                <h1 className="display-4 fw-bold">Personal Portfolio</h1>
                <p className="sub-header">Welcome to my Portfolio!</p>
            </div>

            <div className="home-content">
            <div className="home-card">
                <p className="home-text">This <strong>Personal Portfolio Web Application</strong> uses React with Typescript.
                This portfolio allows front-end web developers to overview my skills, background, and contact 
                information, which demonstrates my understanding of modern front-end development practices.</p>
            </div>

            <div className="home-card">
            <p className="home-text">This portfolio will show the following pages:</p>
                <ul className="home-text">
                    <p><strong>Home Page</strong> - The home page shows an introductory of what the web application is all about.</p>
                    <p><strong>About Me Page</strong> - The about page will serve as a detailed overview of what and where my experiences are being developed.</p>
                    <p><strong>Contact Page</strong> - The contact page is where web creators or visitors can message me for a private concerns or collaborations.</p>
                </ul>
            </div>
            </div>
            </Container>
        </div>
    )
}

export default Home;
