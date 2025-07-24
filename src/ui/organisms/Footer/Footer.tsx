import Image from 'next/image';

import Container from '@/ui/atoms/Container/Container';
import LinkLocal from '@/ui/atoms/LinkLocal/LinkLocal';
import Logo from '@/ui/atoms/Logo';

import iBS from '@/assets/icons/social-bsky.svg';
import iTT from '@/assets/icons/social-tiktok.svg';
import iXx from '@/assets/icons/social-x.svg';

import styles from './Footer.module.scss';

const navigationLinks = [
  { id: 'a1', href: '/link1', name: 'Oferta' },
  { id: 'a2', href: '/link2', name: 'Cennik' },
  { id: 'a3', href: '/link3', name: 'Kariera' },
  { id: 'a4', href: '/link4', name: 'Kontakt' },
];

const socialLinks = [
  {
    id: 'b1',
    icon: iXx,
    alt: 'Nasz profil na X',
    href: 'https://x.com/ksiegowoscDlaIT',
  },
  {
    id: 'b2',
    icon: iBS,
    alt: 'Jesteśmy na Instagramie',
    href: 'https://bsky.app/profile/ksiegowoscDlaIT',
  },
  {
    id: 'b3',
    icon: iTT,
    alt: 'Śledź nas na TikToku',
    href: 'https://www.tiktok.com/@ksiegowoscDlaIT',
  },
];

const Footer = () => {
  return (
    <footer className={styles.wrap}>
      <Container>
        <div className={`${styles.top}`}>
          <Logo size="footer" />
          <div className={styles.socials}>
            {socialLinks.map((social) => (
              <a
                key={social.id}
                className={styles.socialLink}
                href={social.href}
                title={social.alt}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={social.icon} alt={social.alt} width={32} height={32} />
              </a>
            ))}
          </div>
        </div>
        <nav className={`${styles.nav}`}>
          {navigationLinks.map((link) => (
            <LinkLocal key={link.id} href={link.href} className={styles.navLink}>
              {link.name}
            </LinkLocal>
          ))}
        </nav>
      </Container>
    </footer>
  );
};

export default Footer;
