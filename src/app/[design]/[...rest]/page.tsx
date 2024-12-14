//app/[...design]/[...rest]
import { notFound } from 'next/navigation';

export default function CatchAllPage() {
  console.log('in Rest');
  notFound();
}
