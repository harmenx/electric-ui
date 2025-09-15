import { Button } from '~/components/ui/button';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">shadcn Button</h1>
      <div className="flex space-x-4">
        <Button>Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  )
}

export default App