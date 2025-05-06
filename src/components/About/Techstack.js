import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  const skillCategories = [
    {
      title: "Software",
      items: ["MATLAB", "SIMULINK", "STM32CubeIDE", "Quartus", "KiCad", "Code Composer Studio", "Proteus", "MPLAB", "FluidSim", "Fusion 360", "STEP7", "ARDUINO IDE"]
    },
    {
      title: "Hardware",
      items: ["Raspberry Pi", "Arduino", "MIPS Architecture", "TMS320C6xxx", "STM32", "ESP32", "PIC"]
    },
    {
      title: "Programming Languages",
      items: ["C/C++", "Python", "MATLAB", "Assembly"]
    },
    {
      title: "Hardware Description Language",
      items: ["VHDL"]
    },
    {
      title: "Operating Systems",
      items: ["UNIX", "FreeRTOS"]
    },
    {
      title: "Communication Protocols",
      items: ["UART", "I2C", "SPI", "CAN", "LIN", "OBDI", "MQTT"]
    },
    {
      title: "Other Technical Skills",
      items: [
        "Object-oriented programming", 
        "Computer vision (YOLO v8)", 
        "PCB design (Basic knowledge)", 
        "3D design and 3D printing"
      ]
    },
  ];

  return (
    <div style={{ 
      padding: "20px", 
      maxWidth: "1200px",
      margin: "0 auto",
      fontFamily: "'Raleway', sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{ 
        display: "grid", 
        gap: "40px",
        width: "100%"
      }}>
        {skillCategories.map((category, catIndex) => (
          <div key={`category-${catIndex}`} style={{ textAlign: "center" }}>
            <h3 style={{ 
              margin: "0 0 15px 0",
              fontWeight: "700",
              color: "#70a7f0",
              fontSize: "1.5rem",
              letterSpacing: "0.5px"
            }}>{category.title}</h3>
            
            <Row style={{ 
              justifyContent: "center",
              margin: "0",
              width: "100%"
            }}>
              {category.items.map((skill, skillIndex) => (
                <Col 
                  xs={6} 
                  sm={4} 
                  md={3} 
                  lg={2} 
                  key={`skill-${catIndex}-${skillIndex}`} 
                  style={{ 
                    padding: "8px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <div className="tech-tag" style={{ color: "white", width: "100%" }}>
                    {skill}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Techstack;