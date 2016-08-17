import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const model = {
	categories: [
        {
            name: 'Action',
            background: '/assets/action1.jpg'
        },
        {
            name: 'Music',
            background: '/assets/music1.jpg'
        },
        {
            name: 'People',
            background: '/assets/people1.jpg'
        },
        {
            name: 'Landscape',
            background: '/assets/landscape1.jpg'
        }
    ]
};

class Header extends Component {
  render() {
    return (
		<header>
			<div className="headerCont">
				<h1>Andrew Oh photOHgraphy</h1>
				<img id="banner" src="assets/logo.png" />
			</div>
		</header>
    );
  }
}

class PortfolioList extends Component {
  render() {
	  const categories = this.props.model.categories.map(cat => {
		 return (
			 <li className="work_item">
 				<figure className="work_figure">
 					<img className="work_image" src={cat.background} />

 					<figcaption className="work_caption">
 						{cat.name}
 					</figcaption>
 				</figure>
 			</li>
		 );
	  });

    return (
		<div className="container">
	        <h2 className="section_header">Portfolio</h2>

	        <ul className="work_list">
	            {categories}
	        </ul>
	    </div>
    );
  }
}

class AboutMe extends Component {
  render() {
    return (
		<section className="aboutMe">
		    <div className="container">
		        <h2 className="section_header">About Me</h2>

		        <p>Hello! My name is Andrew Oh.</p>
		        <p>I grew up in the San Francisco Bay Area and moved to San Diego, CA to attend the University of California - San Diego where I double majored in Music with an emphasis in Jazz Studies & Cognitive Science with a specialization in Human Computer Interaction.</p>
		        <p>At UCSD, I worked as a photographer and eventually the photo editor of the UCSD Guardian. I also worked as a photographer for the California Institute for Telecommunications and Information Technology (Calit2). </p>
		        <p>I currently work as a User Interface Developer for  <a href="https://www.ashcompanies.com/" title="American Speciality Health">American Speciality Health</a>. However, I also do accept contracts as a freelance photographer for anyone who needs my services. Please look below for any inquiries.</p>

		        <h3>Featured In</h3>
		        <ul>
		            <li>The UCSD Guardian</li>
		            <li>San Diego Magazine</li>
		            <li>The New York Times</li>
		            <li>Yahoo! Editorial Curated Galleries</li>
		        </ul>
		    </div>
		</section>
    );
  }
}

class App extends Component {
  render() {
    return (
		<section>
			<Header />
			<PortfolioList model={model}/>
			<AboutMe />
		</section>
    );
  }
}

export default App;
