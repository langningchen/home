import { Tab, Tabs } from "react-bootstrap"
import TechStack from "./TechStack"
import * as si from "simple-icons"

function TechStackContainer() {
    return (
        <>
            <h3>Tech Stack</h3>
            <Tabs defaultActiveKey="language" id="tech-stack-tabs" className="mb-3">
                <Tab eventKey="language" title="Languages">
                    <TechStack icon={si.siC} />
                    <TechStack icon={si.siCplusplus} />
                    <TechStack icon={si.siJavascript} />
                    <TechStack icon={si.siNodedotjs} />
                    <TechStack icon={si.siPhp} proficiency={1} />
                    <TechStack icon={si.siPython} proficiency={0} />
                    <TechStack icon={si.siTypescript} />
                </Tab>
                <Tab eventKey="framework" title="Frameworks">
                    <TechStack icon={si.siBootstrap} />
                    <TechStack icon={si.siChartdotjs} proficiency={0} />
                    <TechStack icon={si.siDocker} proficiency={0} />
                    <TechStack icon={si.siNginx} proficiency={1} />
                    <TechStack icon={si.siNpm} />
                    <TechStack icon={si.siPnpm} />
                    <TechStack icon={si.siPrisma} proficiency={1} />
                    <TechStack icon={si.siReact} proficiency={1} />
                    <TechStack icon={si.siReactbootstrap} />
                    <TechStack icon={si.siSimpleicons} proficiency={1} />
                </Tab>
                <Tab eventKey="tools" title="Tools">
                    <TechStack icon={si.siAdguard} />
                    <TechStack icon={si.siCloudflarepages} proficiency={1} />
                    <TechStack icon={si.siCloudflareworkers} />
                    <TechStack icon={si.siDarkreader} />
                    <TechStack icon={si.siDeepl} />
                    <TechStack icon={si.siDotenv} />
                    <TechStack icon={si.siEclipseide} proficiency={1} />
                    <TechStack icon={si.siFfmpeg} proficiency={1} />
                    <TechStack icon={si.siGimp} proficiency={1} />
                    <TechStack icon={si.siGithubactions} />
                    <TechStack icon={si.siGithubcopilot} />
                    <TechStack icon={si.siGithubpages} proficiency={1} />
                    <TechStack icon={si.siGooglegemini} proficiency={0} />
                    <TechStack icon={si.siInternetarchive} />
                    <TechStack icon={si.siNamecheap} />
                    <TechStack icon={si.siObsstudio} />
                    <TechStack icon={si.siOverleaf} proficiency={0} />
                    <TechStack icon={si.siTampermonkey} />
                    <TechStack icon={si.siTensorflow} proficiency={0} />
                    <TechStack icon={si.siTermius} proficiency={1} />
                    <TechStack icon={si.siVim} proficiency={1} />
                    <TechStack icon={si.siWireshark} proficiency={0} />
                </Tab>
                <Tab eventKey="platforms" title="Platforms">
                    <TechStack icon={si.siAndroid} />
                    <TechStack icon={si.siCloudflare} />
                    <TechStack icon={si.siDigitalocean} proficiency={1} />
                    <TechStack icon={si.siGithub} />
                    <TechStack icon={si.siLinux} />
                </Tab>
                <Tab eventKey="interest" title="Interests">
                    <TechStack icon={si.siMihoyo} />
                    <TechStack icon={si.siOpenai} />
                    <TechStack icon={si.siStarship} />
                </Tab>
            </Tabs>
        </>
    )
}

export default TechStackContainer
