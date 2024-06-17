const getCurrentUrl = (pathname: string): string => {
  return pathname.split(/[?#]/)[0];
};

const checkIsActive = (pathname: string, url: string) => {
  const current = getCurrentUrl(pathname);
  if (!current || !url) {
    return [false, current];
  }

  if (current === url) {
    return [true, current, url];
  }

  if (current.indexOf(url) > -1) {
    return [true, current];
  }

  return [false, current];
};

export {
  checkIsActive
}
