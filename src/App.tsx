import Button from "./components/kit/Button";
import Input  from "./components/kit/Input";
import Typography from "./components/kit/Typography";


// --- Icons ---
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

function App() {
  return (
    <main className="min-h-screen bg-white p-8 text-black font-sans">
      
      {/* Using Typography for the main title as the teacher asked */}
      <Typography variant="h1" className="mb-12 text-4xl md:text-5xl font-bold">
        UI Kit
      </Typography>

      {/* =========================================
          BUTTONS SECTION (Restored Full Version)
      ========================================= */}
      <Typography variant="h2" className="mb-8">Buttons</Typography>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        {/* Light Theme Buttons */}
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

        {/* Dark Theme Buttons */}
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

      {/* =========================================
          INPUTS SECTION (Restored Full Version)
      ========================================= */}
      <Typography variant="h2" className="mb-8">Inputs</Typography>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-20">
        {/* Light Theme Inputs */}
        <section className="space-y-4 bg-white p-4 border rounded-lg border-neutral-200">
          <h3 className="text-lg font-semibold mb-6">Light theme</h3>
          <Input placeholder="Placeholder" />
          <Input placeholder="Placeholder" rightIcon={<QuestionIcon />} />
          <Input placeholder="Placeholder" leftIcon={<CreditCardIcon />} rightIcon={<QuestionIcon />} />
          <Input placeholder="Search" leftIcon={<SearchIcon />} />
          <Input placeholder="Placeholder" prefix="USD" rightIcon={<ChevronDownIcon />} />
          <Input placeholder="www.relume.io" prefix="http://" />
        </section>

        {/* Dark Theme Inputs */}
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

    </main>
  )
}

export default App