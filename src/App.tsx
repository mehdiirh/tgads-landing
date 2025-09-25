import PixelBlast from "@/backgrounds/third-party/PixelBlast/PixelBlast.tsx";
import {useRef} from "react";
import RotatingText from "@/components/third-party/RotatingText/RotatingText.tsx";
import {Box, Center, Text, useBreakpointValue} from "@chakra-ui/react";
import Background from "@/components/Section/Background/Background.tsx";
import Foreground, {ForegroundContent} from "@/components/Section/Foreground/Foreground.tsx";
import Button from './components/Button/Button';
import MagicBento from "@/components/MagicBento/MagicBento.tsx";

function App() {
  
  const sectionTwo = useRef<HTMLDivElement | null>(null);
  
  return (
    <Box>
      {/*SECTION ONE START*/}
      <Box as={Background} className="h-[90dvh] section-one">
        <PixelBlast/>
        <Foreground>
          <ForegroundContent className="gap-10">
            <Center className="flex-col md:flex-row" gap={4}>
              <Text
                overflow="hidden"
                style={{fontSize: useBreakpointValue({base: "15dvw", md: "4dvw"})}}
              >
                Showup in
              </Text>
              <Box fontSize={{base: "17dvw", md: "4dvw"}}>
                <RotatingText
                  texts={['Channels', 'Bots', 'Search']}
                  mainClassName="px-2 sm:px-2 md:px-3 text-white w-fit bg-[#5227ff] overflow-hidden py-0.5 justify-center rounded-2xl"
                  staggerFrom={"last"}
                  initial={{y: "100%"}}
                  animate={{y: 0}}
                  exit={{y: "-120%"}}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{type: "spring", damping: 30, stiffness: 400}}
                  rotationInterval={2000}
                />
              </Box>
            </Center>
            <Text fontWeight="light" letterSpacing={1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quibusdam, vero.</Text>
            <Button
              onClick={() => window.open("https://panel.wise.ad/", "_blank")}
              className="btn fill w-1/2 md:w-1/4 lg:w-1/6">
              Login
            </Button>
          </ForegroundContent>
        </Foreground>
      </Box>
      {/*SECTION ONE END*/}
      
      {/*SECTION TWO START*/}
      <Box as={Background} ref={sectionTwo} className="h-full section-two">
        <Center className="gap-10">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </Center>
      </Box>
      {/*SECTION TWO END*/}
      
      {/*THIRD TWO START*/}
      {/*THIRD TWO END*/}
      
      {/*FOURTH TWO START*/}
      {/*FOURTH TWO START*/}
      
      {/*FIFTH TWO END*/}
      {/*FIFTH TWO END*/}
      
      {/*FOOTER START*/}
      {/*FOOTER END*/}
    </Box>
  )
}

export default App
