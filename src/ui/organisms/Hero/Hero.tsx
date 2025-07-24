import Container from '@/ui/atoms/Container';
import Section from '@/ui/atoms/Section';
import Separator from '@/ui/atoms/Separator';

const Hero = () => {
  return (
    <Section first>
      <Container>
        Photonesto – Księgowość stworzona dla programistów Prosto, wygodnie i na ludzkich zasadach.
        250 PLN / miesiąc • Intuicyjny panel online • Zniżki za terminowość 👉 Zacznij już dziś i
        zapomnij o księgowości.
      </Container>
      <Separator size="60" />
    </Section>
  );
};

export default Hero;
