import React from 'react';

export const ColorContext = React.createContext({
  color: "#000000",
  changeColor: () => {},
});