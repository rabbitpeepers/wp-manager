export const openPopup = (url: string, title: string, w: number, h: number): Window | null => {
  const left = (window.screen.width / 2) - (w / 2)
  const top = (window.screen.height / 2) - (h / 2)

  return window.open(url, title, [
    'toolbar=no',
    'location=no',
    'directories=no',
    'status=no',
    'menubar=no',
    'scrollbars=no',
    'resizable=no',
    'copyhistory=no',
    `width=${w}`,
    `height=${h}`,
    `top=${top}`,
    `left=${left}`,
  ].join(','))
}
