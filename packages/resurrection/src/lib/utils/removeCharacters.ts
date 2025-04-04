const removeCharacters = (str: string, chars: string): string => {
  return str.replace(new RegExp(`[${chars}]`, 'g'), '');
};

export default removeCharacters;
