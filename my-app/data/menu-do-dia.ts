import type { MenuItem } from "./menu-sections"

// Produtos rotativos do Menu do Dia
// Estes produtos não estão no cardápio completo ou são servidos de forma rotativa
export const menuDoDiaItems: MenuItem[] = [
  
  {
    id: 2003,
    name: "Brownie",
    description: "Item do dia.",
    price: "R$ 18,00",
    image: "/images/Dodia/Brownie.jpeg",
    available: true
  },
  {
    id: 2004,
    name: "Danishs Variados",
    description: "Item do dia.",
    price: "R$ 29,00",
    image: "/images/Dodia/Danishs variados.jpeg",
    available: true
  },

  {
    id: 2011,
    name: "Torta Holandesa",
    description: "Item do dia.",
    price: "R$ 25,00",
    image: "/images/Dodia/Torta Holandesa.jpeg",
    available: false
  },
  {
    id: 2013,
    name: "Cheescake de Frutas Vermelhas",
    description: "Item do dia.",
    price: "R$ 28,00",
    image: "/images/Dodia/Cheescake de frutas vermelhas.jpeg",
    available: false
  },
  {
    id: 2014,
    name: "Torta Folhada Fechada",
    description: "Item do dia.",
    price: "Sob consulta",
    image: "/images/Dodia/Fechada.jpg",
    available: true
  },
  {
    id: 2015,
    name: "Croissant de Chocolate com Nutella",
    description: "Item do dia.",
    price: "Sob consulta",
    image: "/images/Dodia/CroissantChocolate.jpg",
    available: true
  },
  {
    id: 2016,
    name: "Trança Folhada de Frutas Vermelhas",
    description: "Item do dia.",
    price: "Sob consulta",
    image: "/images/Dodia/TrancaFolhadaFrutas.jpg",
    available: true
  },
  {
    id: 2017,
    name: "Croissant de Creme Pâtissière",
    description: "Item do dia.",
    price: "Sob consulta",
    image: "/images/Dodia/CroissantCreme2.jpg",
    available: true
  },

]
