import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import { SignOutButton } from '@clerk/nextjs';

export default function Home() {
  let red: string = 'bg-red-500';
  return (
    
    <section className="w-full min-h-full h-screen bg-purple-500 flex flex-row">
      <Button className={cn(red)}>Hello</Button>
      <SignOutButton />
    </section>
  )
}
