import React from 'react';

import Card from '../components/Card';

import sheph from '../assets/images/sheph.png';
import profile from '../assets/images/p1.jpg';
import weperform from '../assets/images/dancer.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Sheph',
                    subTitle: 'Become someone\'s lifeline.',
                    imgSrc: sheph,
                    link: 'https://github.com/ParmDhaliwal/sheph',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Param Dhaliwal',
                    subTitle: 'LinkedIn Profile',
                    imgSrc: profile,
                    link: 'https://www.linkedin.com/in/parm-s-dhaliwal/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'WePerform',
                    subTitle: 'A platform to showcase your talent',
                    imgSrc: weperform,
                    link: 'https://github.com/ParmDhaliwal/vue-firebase-weperform',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;