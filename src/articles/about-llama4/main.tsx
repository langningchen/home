import { ReactNode } from "react"
import { Fade } from "react-awesome-reveal"
import Article from "../Article"
import * as answer1 from "./answer1.md";
import * as answer2 from "./answer2.md";
import { Accordion } from "react-bootstrap";

export default class AboutLlama4 extends Article {
    public static title = "关于 Llama 4";
    public static date = new Date("2025-04-06");
    public static description = "最近发布了 Llama 4 模型，本文对他进行了一些简单的测试。";

    render(): ReactNode {
        return (
            <Fade triggerOnce>
                <p>
                    注：本文所说的 Llama 4 模型指 llama-4-maverick-03-26-experimental
                </p>

                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>strawberry 当中有几个 r</Accordion.Header>
                        <Accordion.Body>
                            <answer1.ReactComponent />
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>猫为什么会在天上飞？</Accordion.Header>
                        <Accordion.Body>
                            <answer2.ReactComponent />
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Fade>
        )
    }
}
