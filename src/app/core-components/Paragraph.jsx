import React from "react";
import './Paragraph.css';

export function Paragraph(props){ //Funktionalbasierte Komponente
    return (<p className="paragraph">{props.text}</p>)
}
