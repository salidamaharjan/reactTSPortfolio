import './index.css'
import Header from "./components/Header"
import Section from "./components/Section.tsx";
function App() {
  return (
      <div className="bg-gray-100 flex flex-col gap-1">
          <Header/>
          <Section>
              <div className="flex h-20 w-20 border items-center border-black rounded-full">
                  <img src="" alt="Image"/>
              </div>
              <div className="flex flex-col gap-6 flex-1 p-4">
                  <div className="font-bold text-xl">About Me</div>
                  <div>Hello I am compassionate web developer.</div>
                  <div className="flex gap-2">
                      <button className="border rounded-full p-2">Biography</button>
                      <button className="border rounded-full p-2">Experience</button>
                  </div>
              </div>
          </Section>
      </div>

  )
}

export default App
