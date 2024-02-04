import { faLink, faCode, faAnchor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState,useEffect} from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";



const About = () => {

    return (
        <main>
            <section className="my-5">
                <header>
                    <h1>
                        <FontAwesomeIcon icon={faCode} className="me-2" />
                        Tech Stack
                    </h1>
                    <hr />
                </header>
                <p className="my-5">
                    The frontend app (this one) was scaffolding using <a href="https://create-react-app.dev/">Create React App</a>, and build with<a href="https://reactjs.org/">React</a>,<a href="https://react-bootstrap.github.io/">React BootStrap</a> <a href="https://reactrouter.com/en/main">React Router</a>  and  (which in turn uses BootStrap). <a href="https://www.typescriptlang.org/">TypeScript</a> is the language of choice. The backend is built using <a href="https://www.npmjs.com/package/json-server">json-server</a> . The icons used have been courtesy <a href="https://fontawesome.com/docs/web/use-with/react/">Font Awesome</a>.
                </p>
                <Card  className="justify content-center" bg="danger" text="dark">
                <Card.Header><h5>Functionality as per project GuideLines</h5></Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>User is able to search the movies type 🎥:-
      coming soon,
      Movies in theaters,
      top rated Indian,
      top rated movies.
</ListGroup.Item>
<ListGroup.Item>User is able to see all the movie's basic information (poster, title) in the selected Movie Type</ListGroup.Item>
<ListGroup.Item>User get the option to view my favorite 📃 list.</ListGroup.Item>
        <ListGroup.Item>Add to Favourites by clicking on <b>heart</b> 💓 button</ListGroup.Item>
        <ListGroup.Item>Delete From favourite by clicking the <b>trash</b> 🗑️ button</ListGroup.Item>
        <ListGroup.Item>click on <b>ℹ️</b>  button to see the full details of Movie</ListGroup.Item>
        <ListGroup.Item>Search 🔎 for the excact name of the movie its case Sensitive as of now</ListGroup.Item>
      </ListGroup>
    </Card>

    <hr />
                <header >
                    <h1>
                        <FontAwesomeIcon icon={faLink} className="me-2" />
                        Attributions
                    </h1>
                    <hr />
                </header>
                <p className="my-5">
                    The author would like to thank 
                    for providing an API 
                    The author also thanks the people who shared the images (for commercial
                    and royalty-free usage) which are used in this site.
                </p>

                <Card className="text-center" bg="white" text="dark">
      <Card.Header><h3>For Users who like to try</h3></Card.Header>
      <Card.Body >
        <Card.Title>Requriments to use</Card.Title>
        <Card.Text >
          <strong>1</strong>. Start the json Server on port <b>3001</b>.<br />
          <strong>2</strong>. command for json server is <b>json-server data.json --port 3001</b>.<br />
          <strong>3</strong>. now for Client Side: install node from <b>https://nodejs.org/en/</b>.<br />
          <strong>4</strong>. open another terminal and in project folder <b>cd movies-on-the-yip</b>.<br />
          <strong>5</strong>. run <b>npm install</b> and <b>npm start</b> this will install required lib's and start the project.<br/>
          <strong>6</strong>. enjoy. 

          <blockquote className="blockquote mb-0 text-center">
          <p>
            {' '}
            Any developement ideas for the future of the application are always welcome.😎😎😎{' '}
          </p>
          <footer className="blockquote-footer" >
           Janani Balaji <cite title="Source Title">The Dev.🤖</cite>
          </footer>
        </blockquote>
        </Card.Text>
        <Link to={`/Home`} className="btn btn-primary btn-sm"
        ><FontAwesomeIcon icon={faAnchor} className="me-2" />
        <Button variant="primary">Go Check-it Out🫡🙂</Button> </Link>
      </Card.Body>
      <Card.Footer className="text-muted">Janani Over and Out..😇</Card.Footer>
    </Card>
                
            </section>
        </main>
    );
}

export default About;


// style={{ width: '18rem' }}