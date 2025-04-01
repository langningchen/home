import "./EducationContainer.scss"
import { Card, CardGroup, Carousel } from "react-bootstrap"

function EducationContainer() {
    return (
        <>
            <h3>Education</h3>
            <CardGroup className="EducationCardGroup">
                <Card>
                    <Carousel>
                        <Carousel.Item>
                            <Card.Img variant="top" src="/JPXX-1.jpg" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card.Img variant="top" src="/JPXX-2.jpg" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card.Img variant="top" src="/JPXX-3.jpg" />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title>Jianping West Middle School</Card.Title>
                        <Card.Subtitle>2020 ~ 2024</Card.Subtitle>
                        <br />
                        <Card.Text>
                            The school adheres to the school philosophy of Jianping Middle School of "qualified + specialty" and "standard + selection", takes "pursuing positive changes" as its school motto, and takes "cultivating sunny teenagers with soul, spirit, interest and vitality" as its goal, promoting the all-round development of students and cultivating new people of the era with ideals, abilities and responsibilities.
                        </Card.Text>
                        <Card.Link href="https://www.hsjpx.pudong-edu.sh.cn/">Official Website</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Carousel>
                        <Carousel.Item>
                            <Card.Img variant="top" src="/CYEZ-1.jpg" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card.Img variant="top" src="/CYEZ-2.jpg" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card.Img variant="top" src="/CYEZ-3.jpg" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card.Img variant="top" src="/CYEZ-4.jpg" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Card.Img variant="top" src="/CYEZ-5.jpg" />
                        </Carousel.Item>
                    </Carousel>
                    <Card.Body>
                        <Card.Title>Caoyang No.2 High School</Card.Title>
                        <Card.Subtitle>2024 ~ Now</Card.Subtitle>
                        <br />
                        <Card.Text>
                            Shanghai Caoyang No.2 Middle School was founded in 1954. In 1979, it was recognized as a key middle school in Shanghai, achieving its first leap forward. In 1989, Comrade Jiang Zemin wrote the inscription "Diligence, Progress, Realism and Innovation" for the school, which became the school spirit that inspired the students of No.2 Middle School.
                        </Card.Text>
                        <Card.Link href="https://web-hscyez.pte.sh.cn/">Official Website</Card.Link>
                    </Card.Body>
                </Card>
            </CardGroup>
        </>
    )
}

export default EducationContainer
