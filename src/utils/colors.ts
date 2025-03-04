// Colors and gradients generated by AI
export const getColorGradient = (color: string): string => {
  const colorMap: Record<string, string> = {
    // Basic Colors
    Black: '#000000',
    White: '#FFFFFF',
    'White / Cream': '#FFFDD0',
    'Gray / Blue / Silver': '#C0C0C0',
    'Brown / Chocolate': '#8B4513',
    'Red / Chestnut / Orange': '#FF4500',

    // Pattern Colors
    Bicolor: 'linear-gradient(to right, white, black)',
    'Black & White / Tuxedo': 'conic-gradient(at top, black, white, black)',
    'Tricolor (Brown, Black, & White)':
      'conic-gradient(at top, #8B4513, black, white)',
    Calico: 'conic-gradient(at top, #FF4500, black, white)',
    Tortoiseshell: 'linear-gradient(to right, #8B4513, #FF4500, black)',

    // Special Patterns
    Brindle: 'linear-gradient(to right, #4A3728, #8B4513, #32221A)',
    'Merle (Blue)': 'linear-gradient(to right, #4682B4, #B0C4DE, #4682B4)',
    'Merle (Red)': 'linear-gradient(to right, #CD5C5C, #FA8072, #CD5C5C)',
    Harlequin: 'conic-gradient(at top, black, white, black)',

    // Tabby Patterns
    'Tabby (Brown / Chocolate)': '#8B4513',
    'Tabby (Gray / Blue / Silver)': '#808080',
    'Tabby (Orange / Red)': '#FF4500',
    'Tabby (Buff / Tan / Fawn)': '#DEB887',
    'Tabby (Leopard / Spotted)':
      'radial-gradient(ellipse at top, #8B4513, #DEB887, #8B4513)',
    'Tabby (Tiger Striped)':
      'linear-gradient(to right, #FF4500, black, #FF4500)',

    // Point Colors
    'Blue Point': 'linear-gradient(to bottom, white, #4682B4)',
    'Seal Point': 'linear-gradient(to bottom, white, #483C32)',
    'Chocolate Point': 'linear-gradient(to bottom, white, #8B4513)',
    'Lilac Point': 'linear-gradient(to bottom, white, #C8A2C8)',
    'Flame Point': 'linear-gradient(to bottom, white, #FF4500)',
    'Cream Point': 'linear-gradient(to bottom, white, #FFFDD0)',

    // Horse Colors
    Bay: '#800000',
    Palomino: '#FFD700',
    Buckskin: '#DEB887',
    'Dapple Gray': 'radial-gradient(ellipse at top, #C0C0C0, white, #808080)',
    Paint: 'conic-gradient(at top, #8B4513, white, #8B4513)',
    Roan: 'linear-gradient(to right, #B8860B, white, #B8860B)',

    // Light Colors
    'Cream / Ivory': '#FFFDD0',
    'Yellow / Tan / Blond / Fawn': '#F4A460',
    'Buff / Tan / Fawn': '#DEB887',
    Golden: '#FFD700',
    'Apricot / Beige': '#FFE5B4',

    // Special Effects
    Iridescent: 'linear-gradient(to right, #4682B4, #9370DB, #40E0D0)',
    Smoke: 'linear-gradient(to bottom, black, #808080)',

    // Additional Colors
    'Blue Cream': 'linear-gradient(to right, #4682B4, #FFFDD0)',
    Sable: '#8B4513',
    'Silver Marten': '#C0C0C0',
    Champagne: '#F7E7CE',
  };
  return colorMap[color] || '#808080';
};
