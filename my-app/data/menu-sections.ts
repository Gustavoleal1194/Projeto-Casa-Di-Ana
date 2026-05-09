export type MenuItem = {
    id: number
    name: string
    description: string
    price: string
    image: string
    tag?: string
    available?: boolean
    /** Ponto focal da imagem (CSS object-position). Ex: "top", "center", "bottom 20%". */
    imagePosition?: string
}

export type MenuSection = {
    id: string
    title: string
    description: string
    items: MenuItem[]
}

export const defaultMenuSections: MenuSection[] = [
    {
        id: "cafes-quentes",
        title: "Cafés Quentes & Métodos",
        description: "",
        items: [
            {
                id: 5,
                name: "Café do Mané – Expresso Simples",
                description: "Café especial do Cerrado Mineiro · Grão Topázio · Método expresso.",
                price: "R$ 9,00",
                image: "/images/bebidas/Expresso.jpg",
                tag: "Café do Mané"
            },
            {
                id: 6,
                name: "Café do Mané – Expresso Duplo",
                description: "Café especial do Cerrado Mineiro · Grão Topázio · Dose dupla.",
                price: "R$ 15,00",
                image: "/images/bebidas/expresso duplo.jpeg",
                tag: "Café do Mané"
            },
            {
                id: 7,
                name: "Café do Mané – Coado V60",
                description: "Extração equilibrada · Notas doces e acidez delicada.",
                price: "R$ 16,00",
                image: "/images/bebidas/coado2.jpg",
                tag: "Café do Mané"
            },
            {
                id: 8,
                name: "Café do Mané – Clever",
                description: "Extração densa, corpo mais presente e sabor intenso.",
                price: "R$ 16,00",
                image: "/images/bebidas/Clever.jpeg",
                tag: "Café do Mané"
            },
            {
                id: 9,
                name: "Café do Mané – Prensa Francesa",
                description: "Café encorpado, doce e com textura amanteigada.",
                price: "R$ 20,00",
                image: "/images/bebidas/PrensaFran.jpeg",
                tag: "Café do Mané"
            },
            {
                id: 10,
                name: "Café do Luiz Paulo – Coado V60",
                description: "Café especial acima de 85 pts · Mantiqueira · Grão Star Maya.",
                price: "R$ 20,00",
                image: "/images/bebidas/coado2.jpg",
                tag: "Café do Luiz Paulo"
            },
            {
                id: 11,
                name: "Café do Luiz Paulo – Clever",
                description: "Extração com maior densidade e doçura marcante.",
                price: "R$ 20,00",
                image: "/images/bebidas/Clever.jpeg",
                tag: "Café do Luiz Paulo"
            },
            {
                id: 12,
                name: "Café do Luiz Paulo – Prensa Francesa",
                description: "Café encorpado com notas doces e textura cremosa.",
                price: "R$ 22,00",
                image: "/images/bebidas/PrensaFran.jpeg",
                tag: "Café do Luiz Paulo"
            }
        ]
    },
    {
        id: "especialidades-cafe",
        title: "Especialidades com Café",
        description: "",
        items: [
            {
                id: 13,
                name: "Azevedo – Expresso Tônica",
                description: "Espresso com água tônica e toque cítrico refrescante.",
                price: "R$ 20,00",
                image: "/images/bebidas/azevedo.jpg"
            },
            {
                id: 14,
                name: "Wolneyzão – Macchiatto P",
                description: "Dose pequena com leite vaporizado na medida.",
                price: "R$ 10,00",
                image: "/images/bebidas/machiatoP.jpg"
            },
            {
                id: 15,
                name: "Wolneyzão – Macchiatto G",
                description: "Versão grande com textura cremosa.",
                price: "R$ 16,00",
                image: "/images/bebidas/machiatoG.jpg"
            },
            {
                id: 16,
                name: "Darcy",
                description: "Expresso simples com chantilly e chocolate em barra.",
                price: "R$ 18,00",
                image: "/images/bebidas/Darcy.jpg"
            },
            {
                id: 17,
                name: "Theo",
                description: "Café com leite e creminho de leite.",
                price: "R$ 16,00",
                image: "/images/bebidas/Theo.jpg"
            },
            {
                id: 18,
                name: "Dani – Mocha",
                description: "Espresso, leite e ganache de chocolate.",
                price: "R$ 18,00",
                image: "/images/bebidas/Dani.jpg"
            },
            {
                id: 19,
                name: "Nico – Capuccino Italiano",
                description: "Cremoso, intenso e tradicional.",
                price: "R$ 16,00",
                image: "/images/bebidas/Nico.jpg"
            },
            {
                id: 20,
                name: "Juca – Capuccino Caramelo",
                description: "Capuccino em pó com toque de caramelo salgado.",
                price: "R$ 18,00",
                image: "/images/bebidas/JucaCafe.jpeg"
            },
            {
                id: 21,
                name: "Simone – Capuccino Italiano",
                description: "Capuccino italiano com borda de doce de leite.",
                price: "R$ 18,00",
                image: "/images/bebidas/Simone.jpg"
            }
        ]
    },
    {
        id: "outras-bebidas-quentes",
        title: "Outras Bebidas Quentes",
        description: "",
        items: [
            {
                id: 22,
                name: "Bia – Matcha (Leite Integral)",
                description: "Matcha cremoso, preparado com leite integral.",
                price: "R$ 25,00",
                image: "/images/bebidas/Matcha-grande.jpg"
            },
            {
                id: 23,
                name: "Bia – Matcha (Leite Vegetal)",
                description: "Matcha com leite vegetal.",
                price: "R$ 30,00",
                image: "/images/bebidas/Matcha-grande.jpg"
            },
            {
                id: 24,
                name: "Mero – Chocolate Quente",
                description: "Chocolate quente cremoso.",
                price: "R$ 18,00",
                image: "/images/bebidas/Mero.jpg"
            }
        ]
    },
    {
        id: "cafes-gelados",
        title: "Bebidas Geladas",
        description: "",
        items: [
            {
                id: 26,
                name: "Guga – Café Gelado",
                description: "Café extraído e servido gelado.",
                price: "R$ 18,00",
                image: "/images/bebidas/Guga.jpg"
            },
            {
                id: 44,
                name: "Legnini – Expresso Tônica",
                description: "Expresso Tônica gelado. Opcional: bater com açúcar mascavo.",
                price: "R$ 22,00",
                image: "/images/bebidas/legini2.jpg"
            },
            {
                id: 27,
                name: "Vó Daísa",
                description: "Café gelado, calda de cana e rapadura, toque de limão siciliano.",
                price: "R$ 22,00",
                image: "/images/bebidas/vódaysa.jpg"
            },
            {
                id: 28,
                name: "Sandra – Capuccino Gelado",
                description: "Capuccino gelado cremoso.",
                price: "R$ 20,00",
                image: "/images/bebidas/Sandrinha.jpg"
            },
            {
                id: 29,
                name: "Frapê da Carol – Nutella",
                description: "Cremoso, doce e preparado com Nutella.",
                price: "R$ 29,00",
                image: "/images/bebidas/frapeNutella.jpg"
            },
            {
                id: 30,
                name: "Frapê do Felipe – Pistache",
                description: "Frapê artesanal de pistache.",
                price: "R$ 35,00",
                image: "/images/bebidas/frapePistache.jpg"
            },
            {
                id: 31,
                name: "Gaby – Chá de Hibisco com Manga",
                description: "Infusão gelada com frutas tropicais.",
                price: "R$ 20,00",
                image: "/images/bebidas/Gabi.jpg"
            },
            {
                id: 32,
                name: "Chá Mate com Limão",
                description: "Chá mate gelado com limão.",
                price: "R$ 16,00",
                image: "/images/bebidas/cha2.jpg"
            },
            {
                id: 78,
                name: "Chá Giovanna",
                description: "Chá matte gelado, calda de cana e rapadura, toque de limão siciliano.",
                price: "R$ 22,00",
                image: "/images/bebidas/cha_gi.jpeg"
            },
            {
                id: 80,
                name: "Soda de Maçã Verde",
                description: "Soda italiana de maçã verde.",
                price: "R$ 20,00",
                image: "/images/bebidas/SodaMaca.jpeg"
            },
            {
                id: 81,
                name: "Soda Pink Limonade",
                description: "Soda Italiana de pink limonade com suco de limão siciliano.",
                price: "R$ 20,00",
                image: "/images/bebidas/SodaPink.jpeg"
            },
            {
                id: 82,
                name: "Latte Gelado",
                description: "Leite gelado, com Xarope de baunilha, e espresso.",
                price: "R$ 22,00",
                image: "/images/bebidas/latteGelato.jpeg"
            }
        ]
    },
    {
        id: "smoothies",
        title: "Smoothies",
        description: "",
        items: [
            {
                id: 32,
                name: "Julia – Smoothie Manga & Maracujá",
                description: "Smoothie refrescante de manga com maracujá.",
                price: "R$ 28,00",
                image: "/images/bebidas/smothiemanga.jpg"
            },
            {
                id: 33,
                name: "Rafa – Smoothie Frutas Vermelhas",
                description: "Frutas vermelhas congeladas e batidas.",
                price: "R$ 32,00",
                image: "/images/bebidas/smothie rafa.jpg"
            },
            {
                id: 34,
                name: "Jade – Smoothie Doce de Leite com Paçoca",
                description: "Doce de leite com Paçoca, Leite Integral ou Vegetal.",
                price: "R$ 35,00",
                image: "/images/bebidas/jade2.jpg"
            }
        ]
    },
    {
        id: "sucos",
        title: "Sucos",
        description: "",
        items: [
            {
                id: 35,
                name: "Suco de Laranja (Kmais Integral)",
                description: "Laranja integral espremida na hora.",
                price: "R$ 9,00",
                image: "/images/bebidas/kmais.jpg"
            },
            {
                id: 36,
                name: "Suco do Gê – Maracujá com Capim Cidreira",
                description: "Refrescante e aromático.",
                price: "R$ 17,00",
                image: "/images/bebidas/sucodoge2.jpg"
            },
            {
                id: 37,
                name: "Tatha – Suco de Framboesa",
                description: "Suco natural de framboesa.",
                price: "R$ 28,00",
                image: "/images/bebidas/tatha.jpg"
            },
            {
                id: 38,
                name: "Maria – Suco Detox",
                description: "Abacaxi, gengibre, couve, limão siciliano e cardamomo.",
                price: "R$ 24,00",
                image: "/images/bebidas/maria.jpg"
            }
        ]
    },
    {
        id: "aguas-refrigerantes",
        title: "Águas e Refrigerantes",
        description: "",
        items: [
            {
                id: 39,
                name: "Água",
                description: "Com ou sem gás.",
                price: "R$ 6,00",
                image: "/images/external/agua-mineral.webp"
            },
            {
                id: 40,
                name: "Coca-Cola KS",
                description: "Garrafa KS.",
                price: "R$ 8,00",
                image: "/images/bebidas/cocaksimg.jpg"
            },
            {
                id: 41,
                name: "Coca-Cola Zero KS",
                description: "Refrigerante zero açúcar (KS).",
                price: "R$ 8,00",
                image: "/images/external/coca-zero.jpg"
            },
            {
                id: 42,
                name: "Guaraná",
                description: "Refrigerante gelado.",
                price: "R$ 8,00",
                image: "/images/Comidas/guarana.webp"
            }
        ]
    },
    {
        id: "cervejas",
        title: "Cervejas",
        description: "",
        items: [
            {
                id: 45,
                name: "Heineken",
                description: "Cerveja importada.",
                price: "R$ 14,00",
                image: "/images/Comidas/heineken-jp.jpg"
            },
            {
                id: 46,
                name: "Corona",
                description: "Cerveja importada.",
                price: "R$ 14,00",
                image: "/images/bebidas/corona2.webp"
            },
            {
                id: 47,
                name: "Stella Artois Purê Gold",
                description: "Cerveja sem glúten.",
                price: "R$ 14,00",
                image: "/images/bebidas/stellaPure.webp",
                tag: "SEM GLUTEN"
            },
            {
                id: 48,
                name: "Corona Zero Álcool",
                description: "Cerveja sem álcool.",
                price: "R$ 17,00",
                image: "/images/bebidas/corona_zero.JPG"
            }
        ]
    },
    {
        id: "drinks",
        title: "Drinks",
        description: "",
        items: [
            {
                id: 42,
                name: "Aperol Spritz",
                description: "Drink clássico e refrescante.",
                price: "R$ 38,00",
                image: "/images/bebidas/Aperol.jpg"
            },
            {
                id: 43,
                name: "Limoncello Spritz",
                description: "Drink cítrico preparado com limoncello.",
                price: "R$ 40,00",
                image: "/images/bebidas/lemon.jpg"
            }
        ]
    },
    {
        id: "classicos-padaria",
        title: "Clássicos Da Padaria",
        description: "",
        items: [
            {
                id: 49,
                name: "Chico – Pão na Chapa com Manteiga",
                description: "Pão de longa fermentação, Baguete ou Brioche.",
                price: "R$ 9,00",
                image: "/images/Comidas/Chico_pao.jpeg"
            },
            {
                id: 50,
                name: "Mariana – Croissant",
                description: "Acompanha geleia de frutas vermelhas, manteiga ou requeijão.",
                price: "R$ 22,00",
                image: "/images/Comidas/MarianaCro.jpeg"
            },
            {
                id: 51,
                name: "Quim – Queijo Quente",
                description: "Pão Brioche de longa fermentação com mix de queijos.",
                price: "R$ 28,00",
                image: "/images/Comidas/Quinn.jpg"
            },
            {
                id: 52,
                name: "João – Misto Quente",
                description: "Pão Brioche de longa fermentação ou mini baguete com presunto royale e mix de queijos.",
                price: "R$ 30,00",
                image: "/images/Comidas/MistoQuente.jpg"
            },
            {
                id: 53,
                name: "Marina – Bauru",
                description: "Pão de longa fermentação recheado com mix de queijos, tomates assados e picles a parte.",
                price: "R$ 35,00",
                image: "/images/Comidas/Bauru.jpg"
            }
        ]
    },
    {
        id: "ovos",
        title: "Ovos",
        description: "",
        items: [
            {
                id: 76,
                name: "Cido",
                description: "Ovos mexidos (ponto mais) com flor de sal e ceboulette. Acompanha baguete fatiada e tostada. **Opcional: bacon (+R$ 8,00).**",
                price: "R$ 18,00",
                image: "/images/Comidas/Cido.jpg"
            },
            {
                id: 77,
                name: "Odete",
                description: "Ovos cremosos com toque de creme de leite fresco, flor de sal, noz moscada e ceboulette. Acompanha baguete fatiada e tostada. **Opcional: bacon (+R$ 8,00).**",
                price: "R$ 20,00",
                image: "/images/Comidas/odete2.jpg"
            }
        ]
    },
    {
        id: "bowls-saudaveis",
        title: "Bowls & Saudáveis",
        description: "",
        items: [
            {
                id: 54,
                name: "Iogurte Caseiro",
                description: "Com frutas do dia, granola, chás e mel nacional.",
                price: "R$ 32,00",
                image: "/images/Comidas/iogurtena.jpg"
            },
         
        ]
    },
    {
        id: "nossos-lanches",
        title: "Nossos Lanches",
        description: "",
        items: [
            {
                id: 56,
                name: "Luigi",
                description: "Pão focaccia de fermentação natural, pesto de pistache com rúcula e manjericão, fatias finas de mortadela Ceratti, muçarela e rúcula selvática.",
                price: "R$ 52,00",
                image: "/images/Comidas/Luigi.jpg"
            },
            {
                id: 57,
                name: "Júlia",
                description: "Caprese - Pão focaccia de fermentação natural, pesto de pistache com rúcula manjericão, queijo, tomates assados e frescos com muçarela de búfala e rúcula selvática.",
                price: "R$ 45,00",
                image: "/images/Comidas/julia.jpg"
            },
            {
                id: 58,
                name: "Pedro",
                description: "Pão ciabatta de fermentação natural, maionese mostarda Dijon , filé mignon com fatias de queijo, tomate, picles de cebola roxa e rúcula selvática.",
                price: "R$ 49,00",
                image: "/images/Comidas/Pedro.jpg"
            },
            {
                id: 59,
                name: "Coda",
                description: "Sanduíche de pastrami em pão ciabatta de longa fermentação, queijo suíço, mostarda fermentada, picles de pepino e cebola roxa.",
                price: "R$ 52,00",
                image: "/images/Comidas/Coda.jpg"
            },
            {
                id: 60,
                name: "Henrique",
                description: "Croissant, maionese de limão siciliano, tomate fresco, salada de alface, queijo suíço, picles de cebola roxa, raspas de limão e salame.",
                price: "R$ 45,00",
                image: "/images/Comidas/Henrique.jpeg"
            },
            {
                id: 75,
                name: "Murillo - Croissant com salmão e ovo",
                description: "Coalhada com rapas de limão, cebola roxa, alcaparras, tomate caqui, sal, pimenta, azeite na baguete.",
                price: "R$ 58,00",
                image: "/images/Comidas/Lanche_salmao_ovo.jpeg"
            }
        ]
    },
    {
        id: "confeitaria",
        title: "Confeitaria",
        description: "",
        items: [
            {
                id: 61,
                name: "Creme Pâtissière",
                description: "Unidade",
                price: "R$ 15,00",
                image: "/images/Comidas/Sonhos.jpeg"
            },
            {
                id: 62,
                name: "Pistache",
                description: "Unidade",
                price: "R$ 19,00",
                image: "/images/Comidas/SonhoPistache.jpeg"
            },
            {
                id: 63,
                name: "Doce de Leite",
                description: "Unidade",
                price: "R$ 18,00",
                image: "/images/Comidas/Sonhos.jpeg"
            },
            {
                id: 73,
                name: "Bolo Recheado (Fatia)",
                description: "Fatia",
                price: "R$ 35,00",
                image: "/images/Comidas/bolo_fatia.jpeg"
            },
            {
                id: 74,
                name: "Bolo da Vovó",
                description: "Pequeno ou médio.",
                price: "R$ 12,00 (pequeno) | R$ 18,00 (médio)",
                image: "/images/Comidas/boloDaVovo.jpeg"
            },
            {
                id: 79,
                name: "Quindim",
                description: "Unidade",
                price: "R$ 13,00",
                image: "/images/Comidas/quidim.jpeg"
            }
        ]
    },
    {
        id: "folhados",
        title: "Folhados (Viennoiserie)",
        description: "",
        items: [
            {
                id: 64,
                name: "New York Roll",
                description: "Unidade",
                price: "R$ 28,00",
                image: "/images/Dodia/New York roll de frutas vermelhas.jpeg"
            },
            {
                id: 65,
                name: "Cinnamon Roll",
                description: "Unidade",
                price: "R$ 25,00",
                image: "/images/Comidas/Cinnamon_Roll.jpeg"
            },
            {
                id: 66,
                name: "Roll de Passas",
                description: "Unidade",
                price: "R$ 25,00",
                image: "/images/Comidas/RollPassas.jpeg"
            },
            {
                id: 67,
                name: "Pain Suisse",
                description: "Unidade",
                price: "R$ 28,00",
                image: "/images/Comidas/PainSuisse.jpeg"
            },
            {
                id: 68,
                name: "Croissant",
                description: "Unidade",
                price: "R$ 17,00",
                image: "/images/Comidas/Croissant.jpeg"
            },
            {
                id: 69,
                name: "Croissant de Amêndoas",
                description: "Unidade",
                price: "R$ 28,00",
                image: "/images/Comidas/CroissantAmendoas.jpeg"
            },
            {
                id: 70,
                name: "Pain au Chocolat",
                description: "Unidade",
                price: "R$ 24,00",
                image: "/images/Dodia/Pain au Chocolat.jpeg"
            },
            {
                id: 71,
                name: "Roseta",
                description: "Unidade",
                price: "R$ 26,00",
                image: "/images/Dodia/Roseta.jpeg"
            },
            {
                id: 72,
                name: "Pastel de Nata",
                description: "Unidade",
                price: "R$ 15,00",
                image: "/images/Dodia/Pastel de nata.jpeg"
            },
            {
                id: 73,
                name: "Tortinha folhada de pera",
                description: "Unidade",
                price: "R$ 25,00",
                image: "/images/Comidas/TortinhaPera.jpeg"
            }
        ]
    }
]
