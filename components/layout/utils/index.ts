export const updateNavbarElements = (elements: any[], targetHref: string) => {
  return elements.map(item => ({
    ...item,
    current: item.href === targetHref,
  }));
};
