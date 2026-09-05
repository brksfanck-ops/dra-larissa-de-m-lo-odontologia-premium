import { CaseItem, FeedbackItem, LifestyleItem, ServiceItem } from './types';

export const CLINIC_INFO = {
  doctorName: 'Dra. Larissa de Mélo',
  specialty: 'Odontologia Premium & Estética Dental',
  city: 'Guarulhos, SP',
  address: 'Guarulhos - São Paulo | Atendimento Exclusivo com Hora Marcada',
  phoneDisplay: '(11) 97557-1863',
  whatsappUrl: 'https://wa.me/5511975571863?text=Ol%C3%A1%2C%20Dra.%20Larissa!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20odontol%C3%B3gica.',
  whatsappDirect: 'https://wa.me/5511975571863',
  instagram: 'https://instagram.com',
  heroImage: 'https://i.imgur.com/D7lWR9b.png',
};

export const CLINICAL_CASES: CaseItem[] = [
  { id: 'caso-01', image: 'https://i.imgur.com/4RlYqON.png', title: 'Caso Clínico 01', description: 'Harmonização e estética do sorriso' },
  { id: 'caso-02', image: 'https://i.imgur.com/dTHfk7C.png', title: 'Caso Clínico 02', description: 'Alinhamento e proporção dental' },
  { id: 'caso-03', image: 'https://i.imgur.com/NTmXdB9.png', title: 'Caso Clínico 03', description: 'Transformação estética e funcional' },
  { id: 'caso-04', image: 'https://i.imgur.com/ZdPFPJW.png', title: 'Caso Clínico 04', description: 'Planejamento digital individualizado' },
  { id: 'caso-05', image: 'https://i.imgur.com/1os3VLN.png', title: 'Caso Clínico 05', description: 'Restauração de luminosidade e forma' },
  { id: 'caso-06', image: 'https://i.imgur.com/JTdkWb3.png', title: 'Caso Clínico 06', description: 'Design do sorriso com naturalidade' },
  { id: 'caso-07', image: 'https://i.imgur.com/caFfese.png', title: 'Caso Clínico 07', description: 'Reabilitação e refinamento estético' },
  { id: 'caso-08', image: 'https://i.imgur.com/7LlR8UK.png', title: 'Caso Clínico 08', description: 'Precisão em cada contorno' },
  { id: 'caso-09', image: 'https://i.imgur.com/g1UaMlo.png', title: 'Caso Clínico 09', description: 'Simetria e equilíbrio facial' },
  { id: 'caso-10', image: 'https://i.imgur.com/Ojr86gW.png', title: 'Caso Clínico 10', description: 'Correção de morfologia e cor' },
  { id: 'caso-11', image: 'https://i.imgur.com/mvBu0eY.png', title: 'Caso Clínico 11', description: 'Transformação de alta performance' },
  { id: 'caso-12', image: 'https://i.imgur.com/PHlLFfS.png', title: 'Caso Clínico 12', description: 'Planejamento detalhado milimétrico' },
  { id: 'caso-13', image: 'https://i.imgur.com/OJkByMB.png', title: 'Caso Clínico 13', description: 'Estética delicada e biocompatível' },
  { id: 'caso-14', image: 'https://i.imgur.com/IfxttqO.png', title: 'Caso Clínico 14', description: 'Recuperação da vitalidade do sorriso' },
  { id: 'caso-15', image: 'https://i.imgur.com/c7RVdcL.png', title: 'Caso Clínico 15', description: 'Harmonia entre lábios, dentes e gengiva' },
  { id: 'caso-16', image: 'https://i.imgur.com/fbZtrEi.png', title: 'Caso Clínico 16', description: 'Autoestima renovada em cada detalhe' },
];

export const LIFESTYLE_SLIDES: LifestyleItem[] = [
  { id: 'life-01', image: 'https://i.imgur.com/sQSHlyr.png', caption: 'Sorrisos confiantes e marcantes' },
  { id: 'life-02', image: 'https://i.imgur.com/g1bJNmb.png', caption: 'Experiência única em atendimento odontológico' },
  { id: 'life-03', image: 'https://i.imgur.com/h2jznNt.png', caption: 'A sofisticação do cuidado personalizado' },
  { id: 'life-04', image: 'https://i.imgur.com/UfLbc73.png', caption: 'Resultados naturais que transformam vidas' },
];

export const FEEDBACK_ITEMS: FeedbackItem[] = [
  { id: 'feed-01', image: 'https://i.imgur.com/cY6Lczb.png', highlight: 'Mensagem e agradecimento de paciente' },
  { id: 'feed-02', image: 'https://i.imgur.com/hkNMK4j.png', highlight: 'Satisfação imediata com o resultado final' },
  { id: 'feed-03', image: 'https://i.imgur.com/zJDMetJ.png', highlight: 'Cuidado humano e carinho em todo o processo' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Planejamento Digital do Sorriso',
    description: 'Mapeamento minucioso da anatomia facial e proporções áureas para criar uma prévia exata do resultado antes do início.',
    iconName: 'Sparkles',
  },
  {
    title: 'Lentes e Facetas Dentárias',
    description: 'Lâminas ultrafinas de cerâmica e resina de última geração que corrigem cor, formato e espaçamento com extrema naturalidade.',
    iconName: 'Gem',
  },
  {
    title: 'Clareamento de Alta Definição',
    description: 'Técnicas modernas com máxima preservação do esmalte e controle de sensibilidade para um sorriso iluminado.',
    iconName: 'Sun',
  },
  {
    title: 'Estética e Reabilitação Integrada',
    description: 'Alinhamento funcional e oclusal associado à harmonia estética, devolvendo segurança ao mastigar e sorrir.',
    iconName: 'ShieldCheck',
  },
];
