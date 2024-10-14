import './index.css'
import Header from "./components/Header"
import Card from "./components/Card.tsx";
import Button from "./components/Button.tsx";
import Label from "./components/Label.tsx";
import Input from "./components/Input.tsx";
import TextArea from "./components/TextArea.tsx";
function App() {
  return (
      <Card className="bg-gray-100 pl-0 pr-0 flex flex-col gap-1">
          <Header/>
          <Card className="flex justify-between gap-6 items-center">
              <div className="flex h-32 w-32 border items-center justify-center border-black rounded-full">
                  <img src="" alt="photo"/>
              </div>
              <div className="flex flex-col gap-6 flex-1 p-4">
                  <div>
                      <h2 className="font-bold text-xl">About Me</h2>
                      <p>Hello I am compassionate web developer.</p>
                  </div>
                  <div className="flex gap-2">
                      <Button className="bg-blue-300 text-white">Biography</Button>
                      <Button className="bg-gray-300">Experience</Button>
                  </div>
              </div>
          </Card>
          <Card className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">Projects</h2>
              <div className="grid md:grid-cols-3 gap-2 grid-cols-1 justify-between">
                  <div className="flex flex-col gap-2 bg-yellow-200 rounded px-2 py-1 font-bold">Food and Recipes
                      <p className="font-normal text-sm">This app helps the user to enter the ingredient and list of the food item. The user can see the recipes of their choice.</p>
                      <Button className="bg-white font-normal w-[100px]">View Project</Button>
                  </div>
                  <div className="flex flex-col gap-2 bg-blue-300 rounded px-2 py-1 font-bold">Expenses Tracker
                      <p className="font-normal text-sm">This app helps the user to enter their expenses. The user can track their expenses.</p>
                      <Button className="bg-white font-normal w-[100px]">View Project</Button>
                  </div>
                  <div className="flex flex-col gap-2 bg-green-300 rounded px-2 py-1 font-bold">Outdoor Antics
                      <p className="font-normal text-sm">This app helps the user to enter their expenses. The user can
                          track their expenses.</p>
                      <Button className="bg-white font-normal w-[100px]">View Project</Button>
                  </div>
              </div>
          </Card>
          <Card>
              <h2 className="font-bold text-xl">Skills</h2>
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
