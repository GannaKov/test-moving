//app/[design]/[...rest]
// I think I do not need it any more
import { notFound } from 'next/navigation';

export default function CatchAllPage() {
  notFound();
}
