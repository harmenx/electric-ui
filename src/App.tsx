import { Button as ShadcnButton } from '~/components/ui/button';
import { Button as CustomButton } from '~/components/custom/Button';
import { Input } from '~/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">shadcn Components</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">shadcn Button</h2>
        <div className="flex space-x-4">
          <ShadcnButton>Default</ShadcnButton>
          <ShadcnButton variant="destructive">Destructive</ShadcnButton>
          <ShadcnButton variant="outline">Outline</ShadcnButton>
          <ShadcnButton variant="secondary">Secondary</ShadcnButton>
          <ShadcnButton variant="ghost">Ghost</ShadcnButton>
          <ShadcnButton variant="link">Link</ShadcnButton>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Custom Button</h2>
        <div className="flex space-x-4">
          <CustomButton>Default</CustomButton>
          <CustomButton variant="brand">Brand</CustomButton>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Input</h2>
        <Input type="email" placeholder="Email" className="max-w-sm" />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Card</h2>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}

export default App