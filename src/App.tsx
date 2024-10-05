import './index.css'
import Header from "./components/Header"
import Section from "./components/Section.tsx";
import Image from "./components/Image.tsx";
import Button from "./components/Button.tsx";
function App() {
  return (
      <div className="bg-gray-100 flex flex-col gap-1">
          <Header/>
          <Section className="flex justify-between gap-6 items-center">
              <div className="flex h-20 w-20 border items-center justify-center border-black rounded-full">
                  <Image src="" alt="Image"/>
              </div>
              <div className="flex flex-col gap-6 flex-1 p-4">
                  <h2 className="font-bold text-xl">About Me</h2>
                  <p>Hello I am compassionate web developer.</p>
                  <div className="flex gap-2">
                      <Button className="bg-blue-300">Biography</Button>
                      <Button>Experience</Button>
                  </div>
              </div>
          </Section>
          <Section className="flex-col">
                <h3 className="font-bold text-lg">My Journey</h3>
                <p>I started my coding journey in 2024.</p>
                <h3 className="font-bold text-lg">Achievement</h3>
                 <ul>
                     <li>1</li>
                     <li>2</li>
                     <li>3</li>
                     <li>4</li>
                 </ul>
          </Section>
      </div>

  )
}

export default App
