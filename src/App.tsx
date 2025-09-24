import '@/App.css'
import PixelBlast from "@/backgrounds/third-party/PixelBlast/PixelBlast.tsx";
import SplitText from "@/components/third-party/SplitText/SplitText.tsx";
import Button from "@/components/Button/Button.tsx";

function App() {
  return (
    <div>
      <div className="background">
        <PixelBlast/>
        <div className="foreground center font-bold">
          <div className="foreground-content">
            <SplitText tag="h1" text="Show You Everywhere !"/>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <Button className="fill">Default</Button>
              <Button className="outline">Disabled</Button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
