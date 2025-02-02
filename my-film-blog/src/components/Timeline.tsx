import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { DECADES } from "../constants/decades";
import { TimelineProps } from "../types/timeline";

const Timeline: React.FC<TimelineProps> = ({ selectedDecade, onSelectDecade }) => {
    const handleDecadeChange = (decade: number) => {
      onSelectDecade(decade);
    };
  
    const handleArrowClick = (direction: 'left' | 'right') => {
      const currentIndex = DECADES.indexOf(selectedDecade);
      let newIndex = direction === 'left' ? currentIndex - 1 : currentIndex + 1;
      
      if (newIndex < 0) newIndex = DECADES.length - 1;
      if (newIndex >= DECADES.length) newIndex = 0;
      
      onSelectDecade(DECADES[newIndex]);
    };
  
    return (
      <div className="timeline-container">
        <Row className="d-flex justify-content-between align-items-center">
          <Col xs="auto">
            <Button onClick={() => handleArrowClick('left')}>&lt;</Button>
          </Col>
          
          <Col xs="auto">
            <div className="timeline">
              {DECADES.map((decade) => (
                <Button
                  key={decade}
                  variant={decade === selectedDecade ? 'primary' : 'outline-primary'}
                  onClick={() => handleDecadeChange(decade)}
                >
                  {decade}
                </Button>
              ))}
            </div>
          </Col>
  
          <Col xs="auto">
            <Button onClick={() => handleArrowClick('right')}>&gt;</Button>
          </Col>
        </Row>
      </div>
    );
  };
  
  export default Timeline;