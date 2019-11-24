const setMode = (mode) => {
  localStorage.setItem('ele-mode', mode)
}

const getMode = () => {
  const mode = localStorage.getItem('ele-mode')
  return mode ? mode : 'night'
}

export default {
  setMode,
  getMode
}