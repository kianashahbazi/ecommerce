import { useState } from 'react';

import Button from "./components/kit/Button";
import Input from "./components/kit/Input";
import Typography from "./components/kit/Typography";
import TextArea from "./components/kit/TextArea";
import Select from "./components/kit/Select";
import Tag from "./components/kit/Tag";
import Checkboxes from "./components/kit/Checkboxes"; 
import RadioButtons from "./components/kit/RadioButtons";
import Toggle from "./components/kit/Toggle";
import Tooltip from "./components/kit/Tooltip";
import SliderArrow from "./components/kit/SliderArrow";
import Tabs from "./components/kit/Tabs";
import Filters from "./components/kit/Filters";

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

const InfoIcon = () => (
  <svg className="h-5 w-5 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const ImageIcon = () => (
  <svg className="h-8 w-8 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)

function App() {

  const [activeTab, setActiveTab] = useState('monthly')
  const [activeFilter, setActiveFilter] = useState('all')

  const textContent = (
    <div className="w-48 p-3 text-xs leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  )

  const cardContent = (
    <div className="w-64 overflow-hidden">
      <div className="flex h-32 w-full items-center justify-center bg-neutral-300">
        <ImageIcon />
      </div>
      <div className="p-4 text-left">
        <h4 className="text-sm font-bold mb-1">Tooltip Title</h4>
        <p className="text-xs leading-relaxed mb-4 text-neutral-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <a href="#" className="text-xs font-semibold flex items-center gap-1 hover:underline">
          Find out more
          <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen bg-white p-8 text-black font-sans">
      
      <Typography variant="h1" className="mb-12 text-4xl md:text-5xl font-bold">
        UI Kit
      </Typography>

      <Typography variant="h2" className="mb-8">Buttons</Typography>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
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

      <Typography variant="h2" className="mb-8">Inputs</Typography>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="space-y-4 bg-white p-4 border rounded-lg border-neutral-200">
          <h3 className="text-lg font-semibold mb-6">Light theme</h3>
          <Input placeholder="Placeholder" />
          <Input placeholder="Placeholder" rightIcon={<QuestionIcon />} />
          <Input placeholder="Placeholder" leftIcon={<CreditCardIcon />} rightIcon={<QuestionIcon />} />
          <Input placeholder="Search" leftIcon={<SearchIcon />} />
          <Input placeholder="Placeholder" prefix="USD" rightIcon={<ChevronDownIcon />} />
          <Input placeholder="www.relume.io" prefix="http://" />
        </section>

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

      <Typography variant="h2" className="mb-8">Text Area</Typography>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="space-y-4 bg-white p-4 border rounded-lg border-neutral-200">
          <h3 className="text-lg font-semibold mb-6">Light theme</h3>
          <TextArea placeholder="Type your message..." rows={5} />
        </section>

        <section className="space-y-4 bg-black p-4 text-white rounded-lg">
          <h3 className="text-lg font-semibold mb-6">Dark theme</h3>
          <TextArea theme="dark" placeholder="Type your message..." rows={5} />
        </section>
      </div>


      <Typography variant="h2" className="mb-8">Select</Typography>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
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

      <Typography variant="h2" className="mb-8">Tags</Typography>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="space-y-4 bg-white p-4 border rounded-lg border-neutral-200">
          <div className="flex flex-wrap gap-4">
            <Tag>Category</Tag>
            <Tag icon={<TagCardIcon />}>Category</Tag>
          </div>
        </section>

        <section className="space-y-4 bg-black p-4 text-white rounded-lg">
          <div className="flex flex-wrap gap-4">
            <Tag theme="dark">Category</Tag>
            <Tag theme="dark" icon={<TagCardIcon />}>Category</Tag>
          </div>
        </section>
      </div>

      <Typography variant="h2" className="mb-8">Checkboxes</Typography>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="space-y-8 bg-white p-4 border rounded-lg border-neutral-200">
          <div className="flex items-center gap-6">
            <Checkboxes label="Checkbox" />
            <Checkboxes label="Checkbox" defaultChecked />
          </div>

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

          <div className="flex gap-2 pt-4">
            <button className="border border-neutral-300 px-4 py-1.5 text-xs font-medium text-black hover:bg-neutral-50">
              Option one
            </button>
            <button className="bg-black border border-black px-4 py-1.5 text-xs font-medium text-white">
              Option one
            </button>
          </div>
        </section>

        <section className="space-y-8 bg-black p-4 text-white rounded-lg">
          <div className="flex items-center gap-6">
            <Checkboxes theme="dark" label="Checkbox" />
            <Checkboxes theme="dark" label="Checkbox" defaultChecked />
          </div>

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
      <Typography variant="h2" className="mb-8">Radios</Typography>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="space-y-8 bg-white p-4 border rounded-lg border-neutral-200">
          <div className="flex items-center gap-6">
            <RadioButtons name="radio-1" label="Radio" />
            <RadioButtons name="radio-1" label="Radio" defaultChecked />
          </div>

          <div className="space-y-4">
            <RadioButtons 
              name="radio-2"
              layout="card"
              icon={<CubeIcon />}
              label="Radio button"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <RadioButtons 
              name="radio-2"
              layout="card"
              defaultChecked
              icon={<CubeIcon />}
              label="Radio button"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <RadioButtons name="radio-3" layout="button" prefix="A" label="Website design" />
            <RadioButtons name="radio-3" layout="button" prefix="A" label="Website design" defaultChecked />
          </div>
        </section>

        <section className="space-y-8 bg-black p-4 text-white rounded-lg">
          <div className="flex items-center gap-6">
            <RadioButtons theme="dark" name="radio-4" label="Radio" />
            <RadioButtons theme="dark" name="radio-4" label="Radio" defaultChecked />
          </div>

          <div className="space-y-4">
            <RadioButtons
              theme="dark"
              name="radio-5"
              layout="card"
              icon={<CubeIcon />}
              label="Radio button"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <RadioButtons 
              theme="dark"
              name="radio-5"
              layout="card"
              defaultChecked
              icon={<CubeIcon />}
              label="Radio button"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          <div className="flex gap-4 pt-4">
            <RadioButtons theme="dark" name="radio-6" layout="button" prefix="A" label="Website design" />
            <RadioButtons theme="dark" name="radio-6" layout="button" prefix="A" label="Website design" defaultChecked />
          </div>
        </section>
      </div>

      <Typography variant="h2" className="mb-8">Toggles</Typography>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="space-y-8 bg-white p-4 border rounded-lg border-neutral-200">
          <div className="flex items-center gap-6">
            <Toggle label="Option one" />
            <Toggle label="Option one" defaultChecked />
          </div>

          <div className="space-y-4 pt-4">
            <Toggle 
              layout="card"
              label="Toggle checkbox"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim."
            />
            <Toggle 
              layout="card"
              defaultChecked
              label="Toggle checkbox"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim."
            />
          </div>
        </section>

        <section className="space-y-8 bg-black p-4 text-white rounded-lg">
          <div className="flex items-center gap-6">
            <Toggle theme="dark" label="Option one" />
            <Toggle theme="dark" label="Option one" defaultChecked />
          </div>

          <div className="space-y-4 pt-4">
            <Toggle 
              theme="dark"
              layout="card"
              label="Toggle checkbox"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim."
            />
            <Toggle 
              theme="dark"
              layout="card"
              defaultChecked
              label="Toggle checkbox"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim."
            />
          </div>
        </section>
      </div>

      <Typography variant="h2" className="mb-8">Tooltips</Typography>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        
        <section className="space-y-16 bg-white p-8 border rounded-lg border-neutral-200">

          <div className="flex justify-around">
            <Tooltip position="top" content={textContent}>
              <InfoIcon />
            </Tooltip>
            <Tooltip position="bottom" content={textContent}>
              <InfoIcon />
            </Tooltip>
          </div>

          <div className="flex justify-around">
            <Tooltip position="left" content={textContent}>
              <InfoIcon />
            </Tooltip>
            <Tooltip position="right" content={textContent}>
              <InfoIcon />
            </Tooltip>
          </div>

          <div className="flex justify-around pt-10">
            <Tooltip position="bottom" content={cardContent}>
              <InfoIcon />
            </Tooltip>
            <Tooltip position="right" content={cardContent}>
              <InfoIcon />
            </Tooltip>
          </div>

          <div className="flex justify-around pt-10">
            <Tooltip position="top" content={cardContent}>
              <InfoIcon />
            </Tooltip>
            <Tooltip position="left" content={cardContent}>
              <InfoIcon />
            </Tooltip>
          </div>
        </section>

        <section className="space-y-16 bg-black p-8 text-white rounded-lg">
          <div className="flex justify-around text-white">
            <Tooltip theme="dark" position="top" content={textContent}>
              <InfoIcon />
            </Tooltip>
            <Tooltip theme="dark" position="bottom" content={textContent}>
              <InfoIcon />
            </Tooltip>
          </div>

          <div className="flex justify-around text-white">
            <Tooltip theme="dark" position="left" content={textContent}>
              <InfoIcon />
            </Tooltip>
            <Tooltip theme="dark" position="right" content={textContent}>
              <InfoIcon />
            </Tooltip>
          </div>

          <div className="flex justify-around pt-10 text-white">
            <Tooltip theme="dark" position="bottom" content={cardContent}>
              <InfoIcon />
            </Tooltip>
            <Tooltip theme="dark" position="right" content={cardContent}>
              <InfoIcon />
            </Tooltip>
          </div>

          <div className="flex justify-around pt-10 text-white">
            <Tooltip theme="dark" position="top" content={cardContent}>
              <InfoIcon />
            </Tooltip>
            <Tooltip theme="dark" position="left" content={cardContent}>
              <InfoIcon />
            </Tooltip>
          </div>
        </section>
      </div>

      <Typography variant="h2" className="mb-8">Slider Arrows</Typography>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="flex items-center gap-4 bg-white p-4 border rounded-lg border-neutral-200">
          <SliderArrow direction="left" />
          <SliderArrow direction="right" />
        </section>
        <section className="flex items-center gap-4 bg-black p-4 text-white rounded-lg">
          <SliderArrow theme="dark" direction="left" />
          <SliderArrow theme="dark" direction="right" />
        </section>
      </div>

      <Typography variant="h2" className="mb-8">Tabs</Typography>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="flex items-center bg-white p-4 border rounded-lg border-neutral-200">
          <Tabs 
            options={[{ label: 'Monthly', value: 'monthly' }, { label: 'Yearly', value: 'yearly' }]}
            value={activeTab}
            onChange={setActiveTab}
          />
        </section>
        <section className="flex items-center bg-black p-4 text-white rounded-lg">
          <Tabs 
            theme="dark"
            options={[{ label: 'Monthly', value: 'monthly' }, { label: 'Yearly', value: 'yearly' }]}
            value={activeTab}
            onChange={setActiveTab}
          />
        </section>
      </div>

      <Typography variant="h2" className="mb-8">Filters</Typography>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="flex items-center bg-white p-4 border rounded-lg border-neutral-200">
          <Filters 
            options={[
              { label: 'View all', value: 'all' },
              { label: 'Category one', value: 'cat1' },
              { label: 'Category two', value: 'cat2' },
              { label: 'Category three', value: 'cat3' },
              { label: 'Category four', value: 'cat4' },
            ]}
            activeValue={activeFilter}
            onChange={setActiveFilter}
          />
        </section>
        <section className="flex items-center bg-black p-4 text-white rounded-lg">
          <Filters 
            theme="dark"
            options={[
              { label: 'View all', value: 'all' },
              { label: 'Category one', value: 'cat1' },
              { label: 'Category two', value: 'cat2' },
              { label: 'Category three', value: 'cat3' },
              { label: 'Category four', value: 'cat4' },
            ]}
            activeValue={activeFilter}
            onChange={setActiveFilter}
          />
        </section>
      </div>

    </main>
  )
}

export default App