export const getTypeEmoji = (typeName: string): string => {
  switch (typeName) {
    case 'Dog':
      return '🐶';
    case 'Cat':
      return '🐱';
    case 'Rabbit':
      return '🐰';
    case 'Small & Furry':
      return '🐹';
    case 'Horse':
      return '🐴';
    case 'Bird':
      return '🐦';
    case 'Scales, Fins & Other':
      return '🐠';
    case 'Barnyard':
      return '🐮';
    default:
      return '🐾';
  }
};

export const getCoatEmoji = (coat: string): string => {
  switch (coat) {
    case 'Hairless':
      return '🐟';
    case 'Short':
      return '🐭';
    case 'Medium':
      return '🦝';
    case 'Long':
      return '🐍';
    case 'Wire':
      return '🐕‍🦺';
    case 'Curly':
      return '🐩';
    default:
      return '🐾';
  }
};

export const getGenderEmoji = (gender: string): string => {
  switch (gender) {
    case 'Male':
      return '♂️';
    case 'Female':
      return '♀️';
    default:
      return '⚥';
  }
};

export const getAgeEmoji = (age: string): string => {
  switch (age) {
    case 'Baby':
      return '🌱';
    case 'Young':
      return '🌿';
    case 'Adult':
      return '🌳';
    case 'Senior':
      return '🍁';
    default:
      return '❓';
  }
};
