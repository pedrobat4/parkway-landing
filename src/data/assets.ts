export const BASE = '/images';

// Park Way logo (header/navbar/hero)
export const logoUrl = `${BASE}/logos/logo-manzi-branca.svg`;
// Manzi logo (footer / fim da página)
export const logoManziUrl = `${BASE}/logos/logo-manzi.png`;
export const logoManziBrancaUrl = `${BASE}/logos/logo-manzi-branca.svg`;

// Hero usa imagem estática da fachada (mais leve que o .MOV)
export const heroImageUrl = `${BASE}/fachada/Fachada-04.webp`;
export const heroVideoUrl = 'https://storage.lucasmendes.dev/avaloon/manzilp/hero-video.MOV';

export const apartmentImages = [
  { src: `${BASE}/apartamentos/Entrada%2001%203Q.webp`, title: 'Entrada — 3 Quartos' },
  { src: `${BASE}/apartamentos/Entrada%203Q.webp`, title: 'Hall Privativo' },
  { src: `${BASE}/apartamentos/Sala%203Q.webp`, title: 'Living Integrado' },
  { src: `${BASE}/apartamentos/Home%203Q.webp`, title: 'Home Office' },
  { src: `${BASE}/apartamentos/Cozinha%2001%204Q.webp`, title: 'Cozinha Gourmet' },
  { src: `${BASE}/apartamentos/Suite%2001%203Q.webp`, title: 'Suíte Master — 3Q' },
  { src: `${BASE}/apartamentos/Suite%2001%204Q.webp`, title: 'Suíte Master — 4Q' },
  { src: `${BASE}/apartamentos/Suite%204Q.webp`, title: 'Quarto — 4Q' },
  { src: `${BASE}/apartamentos/Varanda%203Q.webp`, title: 'Varanda Gourmet' },
];

export const facadeImages = [
  { src: `${BASE}/fachada/Drone%2002_sunset.webp`, title: 'Fachada — Pôr do Sol' },
  { src: `${BASE}/fachada/Embasamento%20Detalhe_sunset.webp`, title: 'Embasamento — Detalhe' },
  { src: `${BASE}/fachada/Embasamento.webp`, title: 'Embasamento' },
  { src: `${BASE}/fachada/Fachada-04.webp`, title: 'Fachada — Vista Frontal' },
];

export const amenityImages = [
  { src: `${BASE}/areacomun/Piscina%20Detalhe.webp`, title: 'Piscina' },
  { src: `${BASE}/areacomun/Gourmet%2001.webp`, title: 'Área Gourmet' },
  { src: `${BASE}/areacomun/Lounge%20Externo.webp`, title: 'Lounge Externo' },
  { src: `${BASE}/areacomun/Fitness%20Outdoor.webp`, title: 'Fitness Outdoor' },
  { src: `${BASE}/areacomun/Fitness%20Indoor%20Detalhe.webp`, title: 'Fitness Indoor' },
  { src: `${BASE}/areacomun/Coworking.webp`, title: 'Coworking' },
  { src: `${BASE}/areacomun/Brinquedoteca.webp`, title: 'Brinquedoteca' },
  { src: `${BASE}/areacomun/Playground.webp`, title: 'Playground' },
  { src: `${BASE}/areacomun/Hall.webp`, title: 'Hall de Entrada' },
  { src: `${BASE}/areacomun/Bicicletario.webp`, title: 'Bicicletário' },
];

export const garageImages = [
  { src: `${BASE}/areacomun/Box%20Garagem.webp`, title: 'Garagem + Box Privativo' },
];

export const planImages = [
  { src: `${BASE}/planta-baixa/Planta-3Q-103.webp`, title: '3 Quartos — 103 m²' },
  { src: `${BASE}/planta-baixa/Planta%203Q.webp`, title: '3 Quartos — 110 m²' },
  { src: `${BASE}/planta-baixa/Planta%204Q.webp`, title: '4 Quartos — 136 m²' },
  { src: `${BASE}/planta-baixa/Planta%20Baixa%20Apto.webp`, title: 'Pavimento Tipo' },
  { src: `${BASE}/planta-baixa/Planta%20Baixa%20Terreo.webp`, title: 'Pavimento Térreo' },
  { src: `${BASE}/planta-baixa/Planta%20Baixa%20Subsolo.webp`, title: 'Subsolo' },
];

// Contato (fixo Manzi) — botões redirecionam pro WhatsApp
export const PHONE_DISPLAY = '(38) 2100-3431';
export const WHATSAPP_URL = 'https://wa.me/553821003431';
// Mantém-se exportado pra compat, mas todos os botões agora usam WHATSAPP_URL
export const PHONE_TEL = WHATSAPP_URL;

// Endereço
export const ADDRESS_LINE_1 = 'Rua Honorato Campos, 1165';
export const ADDRESS_LINE_2 = 'Morada do Sol · Montes Claros / MG';
export const ADDRESS_FULL = 'Rua Honorato Campos, 1165, Morada do Sol, Montes Claros - MG';

// Coordenadas exatas do pin (do Maps enviado pelo cliente)
export const MAP_LAT = -16.746222;
export const MAP_LNG = -43.886117;
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=17&output=embed`;
export const MAPS_LINK = `https://www.google.com/maps/place/${MAP_LAT},${MAP_LNG}/@${MAP_LAT},${MAP_LNG},17z`;
