import { useState } from 'react';

import { CubeIcon, SearchIcon, CreditCardIcon, QuestionIcon, ChevronDownIcon, CircleDotIcon, TagCardIcon, InfoIcon, ImageIcon, ArrowRightIcon } from './assets/icons';

import Button from "./components/kit/Button";
import Input from "./components/kit/Input";
import { Heading1, Heading2, Heading6, Label, Text } from "./components/kit"; 
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

function App() {
  const [activeTab, setActiveTab] = useState('monthly')
  const [activeFilter, setActiveFilter] = useState('all')

  const textContent = (
    <div className="w-48 p-3 text-inherit">
      <Text size="sm" className="text-inherit leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    </div>
  )

  const cardContent = (
    <div className="w-64 overflow-hidden bg-surface-light">
      <div className="flex h-32 w-full items-center justify-center bg-neutral-lighter">
        <ImageIcon />
      </div>
      <div className="p-4 text-left">
        <Heading6 className="mb-1">Tooltip Title</Heading6>
        <Text size="sm" className="mb-4 text-neutral">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <a href="#" className="text-xs font-semibold flex items-center gap-1 hover:underline text-primary">
          Find out more
          <ArrowRightIcon className="w-3 h-3" />
        </a>
      </div>
    </div>
  )

  return (
    <main className="min-h-screen bg-surface-light p-8 text-primary font-sans">
      
      <Heading1 className="mb-12">UI Kit</Heading1>
      <Heading2 className="mb-8">Buttons</Heading2>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">

        <section className="space-y-8 bg-surface-light p-4 border rounded-lg border-border-light">
          <Label className="text-lg font-bold block">Light theme</Label>

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

        <section className="space-y-8 bg-surface-dark p-4 text-white rounded-lg border border-border-dark">
           <Label className="text-lg font-bold block text-white">Dark theme</Label>

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

      <Heading2 className="mb-8">Inputs</Heading2>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="space-y-4 bg-surface-light p-4 border rounded-lg border-border-light">
          <Label className="text-lg font-bold block mb-6">Light theme</Label>
          <Input placeholder="Placeholder" />
          <Input placeholder="Placeholder" rightIcon={<QuestionIcon />} />
          <Input placeholder="Placeholder" leftIcon={<CreditCardIcon />} rightIcon={<QuestionIcon />} />
          <Input placeholder="Search" leftIcon={<SearchIcon />} />
          <Input placeholder="Placeholder" prefix="USD" rightIcon={<ChevronDownIcon />} />
          <Input placeholder="www.relume.io" prefix="http://" />
        </section>

        <section className="space-y-4 bg-surface-dark p-4 text-white rounded-lg border border-border-dark">
          <Label className="text-lg font-bold block mb-6 text-white">Dark theme</Label>
          <Input theme="dark" placeholder="Placeholder" />
          <Input theme="dark" placeholder="Placeholder" rightIcon={<QuestionIcon />} />
          <Input theme="dark" placeholder="Placeholder" leftIcon={<CreditCardIcon />} rightIcon={<QuestionIcon />} />
          <Input theme="dark" placeholder="Search" leftIcon={<SearchIcon />} />
          <Input theme="dark" placeholder="Placeholder" prefix="USD" rightIcon={<ChevronDownIcon />} />
          <Input theme="dark" placeholder="www.relume.io" prefix="http://" />
        </section>
      </div>

      <Heading2 className="mb-8">Text Area</Heading2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="space-y-4 bg-surface-light p-4 border rounded-lg border-border-light">
          <Label className="text-lg font-bold block mb-6">Light theme</Label>
          <TextArea placeholder="Type your message..." rows={5} />
        </section>

        <section className="space-y-4 bg-surface-dark p-4 text-white rounded-lg border border-border-dark">
          <Label className="text-lg font-bold block mb-6 text-white">Dark theme</Label>
          <TextArea theme="dark" placeholder="Type your message..." rows={5} />
        </section>
      </div>

      <Heading2 className="mb-8">Select</Heading2>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="space-y-4 bg-surface-light p-4 border rounded-lg border-border-light">
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

        <section className="space-y-4 bg-surface-dark p-4 text-white rounded-lg border border-border-dark">
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

      <Heading2 className="mb-8">Tags</Heading2>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="space-y-4 bg-surface-light p-4 border rounded-lg border-border-light">
          <div className="flex flex-wrap gap-4">
            <Tag>Category</Tag>
            <Tag icon={<TagCardIcon />}>Category</Tag>
          </div>
        </section>

        <section className="space-y-4 bg-surface-dark p-4 text-white rounded-lg border border-border-dark">
          <div className="flex flex-wrap gap-4">
            <Tag theme="dark">Category</Tag>
            <Tag theme="dark" icon={<TagCardIcon />}>Category</Tag>
          </div>
        </section>
      </div>

      <Heading2 className="mb-8">Checkboxes</Heading2>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="space-y-8 bg-surface-light p-4 border rounded-lg border-border-light">
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
            <Button size="sm" variant="outline">Option one</Button>
            <Button size="sm" variant="solid">Option one</Button>
          </div>
        </section>

        <section className="space-y-8 bg-surface-dark p-4 text-white rounded-lg border border-border-dark">
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
            <Button theme="dark" size="sm" variant="outline">Option one</Button>
            <Button theme="dark" size="sm" variant="solid">Option one</Button>
          </div>
        </section>
      </div>
      
      <Heading2 className="mb-8">Radios</Heading2>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="space-y-8 bg-surface-light p-4 border rounded-lg border-border-light">
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

        <section className="space-y-8 bg-surface-dark p-4 text-white rounded-lg border border-border-dark">
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

      <Heading2 className="mb-8">Toggles</Heading2>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="space-y-8 bg-surface-light p-4 border rounded-lg border-border-light">
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

        <section className="space-y-8 bg-surface-dark p-4 text-white rounded-lg border border-border-dark">
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

      <Heading2 className="mb-8">Tooltips</Heading2>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        
        <section className="space-y-16 bg-surface-light p-8 border rounded-lg border-border-light">
          <div className="flex justify-around">
            <Tooltip position="top" content={textContent}><InfoIcon /></Tooltip>
            <Tooltip position="bottom" content={textContent}><InfoIcon /></Tooltip>
          </div>

          <div className="flex justify-around">
            <Tooltip position="left" content={textContent}><InfoIcon /></Tooltip>
            <Tooltip position="right" content={textContent}><InfoIcon /></Tooltip>
          </div>

          <div className="flex justify-around pt-10">
            <Tooltip position="bottom" content={cardContent}><InfoIcon /></Tooltip>
            <Tooltip position="right" content={cardContent}><InfoIcon /></Tooltip>
          </div>

          <div className="flex justify-around pt-10">
            <Tooltip position="top" content={cardContent}><InfoIcon /></Tooltip>
            <Tooltip position="left" content={cardContent}><InfoIcon /></Tooltip>
          </div>
        </section>

        <section className="space-y-16 bg-surface-dark p-8 text-white rounded-lg border border-border-dark">
          <div className="flex justify-around text-white">
            <Tooltip theme="dark" position="top" content={textContent}><InfoIcon /></Tooltip>
            <Tooltip theme="dark" position="bottom" content={textContent}><InfoIcon /></Tooltip>
          </div>

          <div className="flex justify-around text-white">
            <Tooltip theme="dark" position="left" content={textContent}><InfoIcon /></Tooltip>
            <Tooltip theme="dark" position="right" content={textContent}><InfoIcon /></Tooltip>
          </div>

          <div className="flex justify-around pt-10 text-white">
            <Tooltip theme="dark" position="bottom" content={cardContent}><InfoIcon /></Tooltip>
            <Tooltip theme="dark" position="right" content={cardContent}><InfoIcon /></Tooltip>
          </div>

          <div className="flex justify-around pt-10 text-white">
            <Tooltip theme="dark" position="top" content={cardContent}><InfoIcon /></Tooltip>
            <Tooltip theme="dark" position="left" content={cardContent}><InfoIcon /></Tooltip>
          </div>
        </section>
      </div>

      <Heading2 className="mb-8">Slider Arrows</Heading2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="flex items-center gap-4 bg-surface-light p-4 border rounded-lg border-border-light">
          <SliderArrow direction="left" />
          <SliderArrow direction="right" />
        </section>
        <section className="flex items-center gap-4 bg-surface-dark p-4 text-white rounded-lg border border-border-dark">
          <SliderArrow theme="dark" direction="left" />
          <SliderArrow theme="dark" direction="right" />
        </section>
      </div>

      <Heading2 className="mb-8">Tabs</Heading2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="flex items-center bg-surface-light p-4 border rounded-lg border-border-light">
          <Tabs 
            options={[{ label: 'Monthly', value: 'monthly' }, { label: 'Yearly', value: 'yearly' }]}
            value={activeTab}
            onChange={setActiveTab}
          />
        </section>
        <section className="flex items-center bg-surface-dark p-4 text-white rounded-lg border border-border-dark">
          <Tabs 
            theme="dark"
            options={[{ label: 'Monthly', value: 'monthly' }, { label: 'Yearly', value: 'yearly' }]}
            value={activeTab}
            onChange={setActiveTab}
          />
        </section>
      </div>

      <Heading2 className="mb-8">Filters</Heading2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        <section className="flex items-center bg-surface-light p-4 border rounded-lg border-border-light">
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
        <section className="flex items-center bg-surface-dark p-4 text-white rounded-lg border border-border-dark">
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