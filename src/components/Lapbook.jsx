import AcordeonHexa from "./acordeonHexa";
import "./lapbook.css";
import { useState } from "react";

export default function Lapbook() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div className="triptico">
            <div className={`panel left ${open ? "open" : ""}`} onClick={handleClick}><p>Hola mundo</p></div>
            <div className="panel center"></div>
            <div className={`panel right ${open ? "open" : ""}`} onClick={handleClick}></div>
            <AcordeonHexa />
        </div>
    )
};