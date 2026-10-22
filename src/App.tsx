import Button from "./components/kit/Button";
import Input  from "./components/kit/Input";
import Typography from "./components/kit/Typography";
import TextArea from "./components/kit/TextArea";
import Select from "./components/kit/Select";
import Tag from "./components/kit/Tag";
import Checkboxes from "./components/kit/Checkboxes";



const CubeIcon = () => (
  <span aria-hidden="true" className="text-base leading-none">◈</span>
)

const SearchIcon = () => (
  <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
)

const CreditCardIcon = () => (
  <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
)

const QuestionIcon = () => (
  <svg className="h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)
const CircleDotIcon = () => (
  <svg className="h-4 w-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const TagCardIcon = () => (
  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
)


function App() {
  return (
    <main className="min-h-screen bg-white p-8 text-black font-sans">
      
      {}
      <Typography variant="h1" className="mb-12 text-4xl md:text-5xl font-bold">
        UI Kit
      </Typography>

      {}
      <Typography variant="h2" className="mb-8">Buttons</Typography>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        {}
        <section className="space-y-8 bg-white p-4 border rounded-lg border-neutral-200">
          <h3 className="text-lg font-semibold">Light theme</h3>

          <div className="flex flex-wrap items-center gap-4">
            <Button>Button</Button>
            <Button variant="outline">Button</Button>
            <Button variant="ghost">Button</Button>
            <Button variant="danger">Danger</Button>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button icon={<CubeIcon />}>Button</Button>
            <Button variant="outline" icon={<CubeIcon />}>Button</Button>
            <Button variant="ghost" icon={<CubeIcon />}>Button</Button>
            <Button variant="danger" icon={<CubeIcon />}>Danger</Button>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button icon={<CubeIcon />} iconPosition="right">Button</Button>
            <Button variant="outline" icon={<CubeIcon />} iconPosition="right">Button</Button>
            <Button variant="ghost" icon={<CubeIcon />} iconPosition="right">Button</Button>
            <Button variant="danger" icon={<CubeIcon />} iconPosition="right">Danger</Button>
          </div>

          <div className="flex items-center gap-4">
            <Button size="icon" aria-label="Cube"><CubeIcon /></Button>
            <Button size="icon" variant="outline" aria-label="Cube"><CubeIcon /></Button>
            <Button size="icon" variant="ghost" aria-label="Cube"><CubeIcon /></Button>
            <Button size="icon" variant="danger" aria-label="Cube"><CubeIcon /></Button>
          </div>
        </section>

        {}
        <section className="space-y-8 bg-black p-4 text-white rounded-lg">
          <h3 className="text-lg font-semibold">Dark theme</h3>

          <div className="flex flex-wrap items-center gap-4">
            <Button theme="dark">Button</Button>
            <Button theme="dark" variant="outline">Button</Button>
            <Button theme="dark" variant="ghost">Button</Button>
            <Button theme="dark" variant="danger">Danger</Button>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button theme="dark" icon={<CubeIcon />}>Button</Button>
            <Button theme="dark" variant="outline" icon={<CubeIcon />}>Button</Button>
            <Button theme="dark" variant="ghost" icon={<CubeIcon />}>Button</Button>
            <Button theme="dark" variant="danger" icon={<CubeIcon />}>Danger</Button>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button theme="dark" icon={<CubeIcon />} iconPosition="right">Button</Button>
            <Button theme="dark" variant="outline" icon={<CubeIcon />} iconPosition="right">Button</Button>
            <Button theme="dark" variant="ghost" icon={<CubeIcon />} iconPosition="right">Button</Button>
            <Button theme="dark" variant="danger" icon={<CubeIcon />} iconPosition="right">Danger</Button>
          </div>

          <div className="flex items-center gap-4">
            <Button theme="dark" size="icon" aria-label="Cube"><CubeIcon /></Button>
            <Button theme="dark" size="icon" variant="outline" aria-label="Cube"><CubeIcon /></Button>
            <Button theme="dark" size="icon" variant="ghost" aria-label="Cube"><CubeIcon /></Button>
            <Button theme="dark" size="icon" variant="danger" aria-label="Cube"><CubeIcon /></Button>
          </div>
        </section>
      </div>

      {}
      <Typography variant="h2" className="mb-8">Inputs</Typography>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        {}
        <section className="space-y-4 bg-white p-4 border rounded-lg border-neutral-200">
          <h3 className="text-lg font-semibold mb-6">Light theme</h3>
          <Input placeholder="Placeholder" />
          <Input placeholder="Placeholder" rightIcon={<QuestionIcon />} />
          <Input placeholder="Placeholder" leftIcon={<CreditCardIcon />} rightIcon={<QuestionIcon />} />
          <Input placeholder="Search" leftIcon={<SearchIcon />} />
          <Input placeholder="Placeholder" prefix="USD" rightIcon={<ChevronDownIcon />} />
          <Input placeholder="www.relume.io" prefix="http://" />
        </section>

        {}
        <section className="space-y-4 bg-black p-4 text-white rounded-lg">
          <h3 className="text-lg font-semibold mb-6">Dark theme</h3>
          <Input theme="dark" placeholder="Placeholder" />
          <Input theme="dark" placeholder="Placeholder" rightIcon={<QuestionIcon />} />
          <Input theme="dark" placeholder="Placeholder" leftIcon={<CreditCardIcon />} rightIcon={<QuestionIcon />} />
          <Input theme="dark" placeholder="Search" leftIcon={<SearchIcon />} />
          <Input theme="dark" placeholder="Placeholder" prefix="USD" rightIcon={<ChevronDownIcon />} />
          <Input theme="dark" placeholder="www.relume.io" prefix="http://" />
        </section>
      </div>

      {}
      <Typography variant="h2" className="mb-8">Text Area</Typography>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        
        {}
        <section className="space-y-4 bg-white p-4 border rounded-lg border-neutral-200">
          <h3 className="text-lg font-semibold mb-6">Light theme</h3>
          <TextArea placeholder="Type your message..." rows={5} />
        </section>

        {}
        <section className="space-y-4 bg-black p-4 text-white rounded-lg">
          <h3 className="text-lg font-semibold mb-6">Dark theme</h3>
          <TextArea theme="dark" placeholder="Type your message..." rows={5} />
        </section>

      </div>

      {}
      
      <Typography variant="h2" className="mb-8">Select</Typography>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        
        {}
        <section className="space-y-4 bg-white p-4 border rounded-lg border-neutral-200">
          <Select defaultValue="">
            <option value="" disabled hidden>Select one...</option>
            <option value="1">React</option>
            <option value="2">Typescript</option>
          </Select>

          <Select defaultValue="" leftIcon={<CircleDotIcon />}>
            <option value="" disabled hidden>Select one...</option>
            <option value="1">Tailwind</option>
            <option value="2">Next js</option>
          </Select>
        </section>

        {}
        <section className="space-y-4 bg-black p-4 text-white rounded-lg">
          <Select theme="dark" defaultValue="">
            <option value="" disabled hidden>Select one...</option>
            <option value="1">React</option>
            <option value="2">Typescript</option>
          </Select>

          <Select theme="dark" defaultValue="" leftIcon={<CircleDotIcon />}>
            <option value="" disabled hidden>Select one...</option>
            <option value="1">Tailwind</option>
            <option value="2">Next js</option>
          </Select>
        </section>
      </div>


      {}
      <Typography variant="h2" className="mb-8">Tags</Typography>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        
        {}
        <section className="space-y-4 bg-white p-4 border rounded-lg border-neutral-200">
          <div className="flex flex-wrap gap-4">
            <Tag>Category</Tag>
            <Tag icon={<TagCardIcon />}>Category</Tag>
          </div>
        </section>

        {}
        <section className="space-y-4 bg-black p-4 text-white rounded-lg">
          <div className="flex flex-wrap gap-4">
            <Tag theme="dark">Category</Tag>
            <Tag theme="dark" icon={<TagCardIcon />}>Category</Tag>
          </div>
        </section>
      </div>
      <Typography variant="h2" className="mb-8">Checkboxes</Typography>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        
        {}
        <section className="space-y-8 bg-white p-4 border rounded-lg border-neutral-200">
          
          {}
          <div className="flex items-center gap-6">
            <Checkboxes label="Checkbox" />
            <Checkboxes label="Checkbox" defaultChecked />
          </div>

          {}
          <div className="space-y-4">
            <Checkboxes 
              isCard
              icon={<CubeIcon />}
              label="Checkbox"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Checkboxes 
              isCard
              defaultChecked
              icon={<CubeIcon />}
              label="Checkbox"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          {}
          <div className="flex gap-2 pt-4">
            <button className="border border-neutral-300 px-4 py-1.5 text-xs font-medium text-black hover:bg-neutral-50">
              Option one
            </button>
            <button className="bg-black border border-black px-4 py-1.5 text-xs font-medium text-white">
              Option one
            </button>
          </div>
        </section>

        {}
        <section className="space-y-8 bg-black p-4 text-white rounded-lg">
          
          {}
          <div className="flex items-center gap-6">
            <Checkboxes theme="dark" label="Checkbox" />
            <Checkboxes theme="dark" label="Checkbox" defaultChecked />
          </div>

          {}
          <div className="space-y-4">
            <Checkboxes 
              theme="dark"
              isCard
              icon={<CubeIcon />}
              label="Checkbox"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Checkboxes 
              theme="dark"
              isCard
              defaultChecked
              icon={<CubeIcon />}
              label="Checkbox"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          {}
          <div className="flex gap-2 pt-4">
            <button className="border border-neutral-700 px-4 py-1.5 text-xs font-medium text-white hover:bg-neutral-900">
              Option one
            </button>
            <button className="bg-white border border-white px-4 py-1.5 text-xs font-medium text-black">
              Option one
            </button>
          </div>
        </section>

      </div>

    </main>
  )
}

export default App