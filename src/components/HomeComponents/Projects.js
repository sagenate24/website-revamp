import React, { Component } from 'react';
import { Card } from './Card';
import { Header } from '../Shared/Header';

class Projects extends Component {
  render() {
    const { projects } = this.props;

    return (
      <div style={styles.container}>
          <Header>PROJECTS</Header>
          <div style={styles.background}>
            <div style={styles.cardContainer}>
              {projects.map(item => (
                <Card
                  key={item.id}
                  title={item.title}
                  bgColor={item.bgColor}
                  alt={item.title}
                  icon={item.icon}
                  IconWidth={item.width}
                />
              )) }
            </div>
          </div>
      </div>
    );
  }
}

const styles = {
  container: {
  },
  background: {
    width: '100%',
    background: '#3A3A3A',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 250,
    paddingBottom: 30,
  },
  cardContainer: {
    display: 'flex',
    marginTop: '-150px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '1000px'
  }
}

export default Projects;