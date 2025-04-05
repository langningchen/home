import { ReactNode } from "react"
import { Fade } from "react-awesome-reveal"
import ArticleImage from "../ArticleImage"
import cppCode from "./cpp-code.png"
import ccf from "./ccf.png?transparent"
import cloudServer from "./cloud-server.png"
import ai from "./ai.png"
import Article from "../Article"

export default class IntroductionAboutMe extends Article {
    public static title = "Introduction: About Me";
    public static date = new Date("2024-10-01");
    public static description = "Who am I? What do I do? What do I want to do? Come and read my introduction!";

    render(): ReactNode {
        return (
            <Fade triggerOnce>
                <p>
                    My name is Langning Chen, and I use the username <code>langningchen</code> across most social media platforms.
                    My journey into programming began around the third grade when I started experimenting with Visual Basic Script (VBScript).
                    VBScript, developed by Microsoft, is a lightweight, interpreted scripting language based on Visual Basic.
                    It was commonly used for automating tasks in Windows environments and for web interactions.
                    These early experiments laid the foundation for my understanding of programming concepts such as variables and functions.
                </p>

                <p>
                    In middle school, I developed an interest in web development and began creating basic web pages using HTML, JavaScript, and CSS.
                    This interest led me to desire my own website, prompting me to register the free domain langningc2009.ml (now defunct).
                    Lacking the funds to purchase server hosting, I discovered <a href="https://www.infinityfree.com/">InfinityFree</a>, a free PHP hosting service.
                    This motivated me to learn PHP, leading to the creation of my project, <a href="https://github.com/langningchen/ClassWeb">ClassWeb</a>, which utilized the <a href="https://getbootstrap.com/">Bootstrap framework</a> for responsive design.
                    Through this project, I gained experience with SQL databases and learned about web security practices, including basic protection against SQL injection attacks.
                </p>

                <p>
                    Over time, I developed numerous small projects, all of which can be found in <a href="https://github.com/langningchen?tab=repositories">my GitHub repositories</a>.
                    During this period, I also began exploring the C programming language.
                    In my first year of middle school, I started participating in Olympiad in Informatics (OI) competitions, which introduced me to C++.
                    OI is a prestigious informatics competition for secondary school students, focusing on algorithms and problem-solving skills.
                    Additionally, I delved into the fundamentals of TCP/UDP socket programming.
                </p>

                <p><ArticleImage src={cppCode} /></p>

                <p>
                    In my second year, while studying OI under Teacher Gao Kai, I found the online judge system, <a href="https://www.xmoj.tech/">xmoj.tech</a>, to be challenging to use.
                    To address this, I developed a user script, <a href="https://github.com/langningchen/XMOJ-Script">XMOJ-Script</a>, initially intended for personal use to enhance the platform's usability.
                    As more OI peers expressed interest, I expanded the project by developing a backend using PHP.
                    During this phase, two users joined me in development, introducing me to <a href="https://www.cloudflare.com/">Cloudflare</a> and <a href="https://workers.dev/">its Workers platform</a>, which offers free serverless computing resources.
                    This led me to transition from PHP to Node.js for server-side development and to register the domain xmoj-bbs.tech (now defunct).
                    Together, we formed my first GitHub team, <a href="https://github.com/XMOJ-Script-dev">XMOJ-Script-dev</a>, and migrated the XMOJ-Script repository to the team.
                    Collaborating on this project introduced me to <a href="https://github.com/features/actions">GitHub Actions</a> for CI/CD, <a href="https://github.com/features/copilot">GitHub Copilot</a> as an AI programming assistant, and <a href="https://github.com/features/code-review">GitHub's code review</a> process for merging pull requests.
                    As I entered my third year and began preparing for high school entrance exams, I entrusted the project's primary development to my two collaborators, <a href="https://github.com/XMOJ-Script-dev/XMOJ-Script/issues/12">officially confirming their leadership</a>.
                    After my domain xmoj-bbs.tech expired, they registered a new domain, <a href="https://xmoj-bbs.me/">xmoj-bbs.me</a>, which continues to be in use.
                    The project remains active with approximately 50 active users, and I occasionally contribute.
                </p>

                <p><ArticleImage src={ccf} /></p>

                <p>
                    Concurrently, I developed an online judge system, <a href="https://github.com/langningchen/OJ">OJ</a>, which has since been transferred to the CYEZOI team. (We'll talk about this later.)
                    To test this project, I utilized <a href="https://github.com/features/codespaces">GitHub Codespaces</a>, providing a development environment with root access.
                    After completing my exams, I registered my personal domain, <a href="http://langningchen.com/">langningchen.com</a>, and used Cloudflare Workers to host several small websites.
                </p>

                <p><ArticleImage src={cloudServer} /></p>

                <p>
                    In the summer of 2024, upon enrolling at Cao Yang No. 2 High School, I reapplied for the <a href="https://education.github.com/pack">GitHub Student Developer Pack</a> and obtained a <a href="https://developer.microsoft.com/en-us/microsoft-365/dev-program">Microsoft 365 E5 developer subscription</a>.
                    Using the provided <a href="https://www.digitalocean.com/">DigitalOcean</a> credits, I set up a server and registered the domain <a href="https://cyezoi.com/">cyezoi.com</a>, hosting several simple servers for our school's OI participants.
                    This experience enhanced my understanding of server maintenance and security.
                    As I resumed OI studies, a <a href="https://github.com/langningchen/luoguCaptcha">Luogu CAPTCHA recognition plugin</a> and an OI-related game, <a href="https://github.com/CYEZOI/OIBingo">OIBingo</a>.
                    After the school year began, I created a simple website for my class, <a href="https://github.com/CYEZOI/cyezoi-yq">cyezoi-yq</a>, using the <a href="https://react.dev/">React framework</a>.
                    The site is hosted at <a href="https://yq.cyezoi.com/">yq.cyezoi.com</a>.
                    During the winter break, I participated in the <a href="https://www.luogu.com.cn/article/7yfdaqak">Luogu Winter Paintboard event</a> and developed <a href="https://github.com/CYEZOI/luoguPaintboard">an automated drawing program</a>, utilizing <a href="https://www.prisma.io/">Prisma</a> to deepen my understanding of database serialization.
                </p>

                <p>
                    Currently, I am actively maintaining <a href="https://github.com/langningchen/hydro-helper">Hydro Helper</a>, an unofficial Visual Studio Code (VSCode) extension designed to streamline problem-solving for users of the <a href="https://hydro.ac/">Hydro Online Judge platform</a>.
                    This extension enables users to view problem statements and contest information directly within VSCode, submit solutions, and receive real-time evaluation results.
                    By integrating these functionalities into the code editor, Hydro Helper enhances the efficiency of competitive programming workflows.
                </p>

                <p><ArticleImage src={ai} /></p>

                <p>
                    Looking ahead, I am considering delving into the field of artificial intelligence and remain committed to contributing to the open-source community.
                    I believe that open-source software fosters collaboration and innovation, and I am eager to be part of this vibrant ecosystem.
                </p>
            </Fade>
        )
    }
}
