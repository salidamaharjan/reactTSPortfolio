import './index.css'
import Header from "./components/Header"
import Card from "./components/Card.tsx";
import Button from "./components/Button.tsx";
import Label from "./components/Label.tsx";
import Input from "./components/Input.tsx";
import TextArea from "./components/TextArea.tsx";
import ProfileImg from "./assets/images/Salida.png";
import Projects from "./components/Projects.tsx";
import Box from "./components/Box.tsx";
import AboutMe from "./pages/AboutMe.tsx";

function App() {
  return (
      <Card className="bg-gray-100 pl-0 pr-0 flex flex-col gap-1">
          <Header/>
          <Card className="flex justify-between gap-6 items-center">
                  <img className="flex h-32 w-32 border items-center justify-center border-black rounded-full" src={ProfileImg} alt="photo"/>
              <div className="flex flex-col gap-6 flex-1 p-4">
                  <AboutMe/>
                  <div className="flex gap-2">
                      <Button className="bg-blue-300 text-white">Biography</Button>
                      <Button className="bg-gray-300">Experience</Button>
                  </div>
              </div>
          </Card>
          <Card className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">Projects</h2>
              <div className="grid md:grid-cols-3 gap-2 grid-cols-1 justify-between">
                      <Projects/>
              </div>
          </Card>
          <Card className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">Skills</h2>
              <div className="grid md:grid-cols-3 gap-2 grid-cols-1 justify-between">
                  <Box className="text-center bg-red-300">
                      <div>Frontend</div>
                      <ul className="font-normal text-sm">
                          <li>HTML</li>
                          <li>CSS</li>
                          <li>JavaScript</li>
                          <li>TypeScript</li>
                          <li>Java</li>
                          <li>Tailwind</li>
                      </ul>
                  </Box>
                  <Box className="text-center bg-purple-200">
                      <div>Backend</div>
                      <ul className="font-normal text-sm">
                          <li>Node.js</li>
                          <li>Express.js</li>
                      </ul>
                  </Box>
                  <Box className="text-center bg-gray-300">
                      <div>ORM</div>
                      <ul className="font-normal text-sm">
                          <li>Sequelize</li>
                          <li>Postgres</li>
                          <li>Mongoose</li>
                      </ul>
                  </Box>
              </div>
          </Card>
          <Card className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">Get in Touch</h2>
              <Label htmlFor="name">Name</Label>
              <Input id="name"/>
              <Label htmlFor="email">Email</Label>
              <Input id="email"/>
              <Label htmlFor="message">Message</Label>
              <TextArea id="message"/>
              <div>
              <Button className="bg-blue-300 text-white">Send Message</Button>
              </div>
          </Card>
      </Card>
  )
}

export default App
