import { Section } from "./components/Section";
import { AnimationView } from "./features/AnimationView";


function Header() {
  return <div className="font-pacifico text-5xl my-10">Miffy Studio</div>;
}

function App() {
  return (
    <Section className="flex flex-col items-center  bg-light-cyan">
      <Header />
      <AnimationView />
    </Section>
  );
}

export default App;
