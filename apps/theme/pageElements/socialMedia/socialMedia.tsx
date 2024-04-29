import { createRenderer } from "@webiny/app-page-builder-elements";
import React, { useState } from "react";
import "./socialMedia.scss"
import { ReactComponent as SocialIcon } from "../../icon/Social Icons.svg"
import { ReactComponent as SocialIcon1 } from "../../icon/Social Icons (1).svg"
import { ReactComponent as Frame } from "../../icon/Frame.svg"
import { ReactComponent as Frame1 } from "../../icon/Frame (1).svg"
import { Link } from "@webiny/react-router/Link";

export const SocialMedia = createRenderer(() => {
    const [direction, setDirection] = useState()
    return (
        <div className="socialMediaBox" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div className="sociaIconBox">
                <Link to={"/"}>
                    <SocialIcon></SocialIcon>
                </Link></div>
            <div className="sociaIconBox">
                <Link to={"/"}>
                    <SocialIcon1></SocialIcon1>
                </Link></div>
            <div className="sociaIconBox">
                <Link to={"/"}>
                    <Frame></Frame>
                </Link></div>
            <div className="sociaIconBox">
                <Link to={"/"}>
                    <Frame1></Frame1>
                </Link></div>
        </div>
    )
})