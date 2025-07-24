import Container from '@/ui/atoms/Container';
import Separator from '@/ui/atoms/Separator';
import Link from 'next/link';

export const metadata = {
  title: 'Home | Tech Starter Kit',
};

export default function Page() {
  return (
    <Container>
      <Separator size="60" />
      <Separator size="60" />
      <Separator size="60" />
      <h3>Photonesto Landing Page</h3>
      <ul>
        <li>
          <Link href="/basic">Wersja podstawowa - bez podglądu</Link>
        </li>
        <li>
          <Link href="/real-time-updates">Update treści live:</Link>
        </li>
      </ul>
      <Separator size="60" />
      <Separator size="60" />
      <Separator size="60" />
      <Separator size="60" />
      <Separator size="60" />
      <Separator size="60" />
      <Separator size="60" />
      <Separator size="60" />
      <Separator size="60" />
    </Container>
  );
}
