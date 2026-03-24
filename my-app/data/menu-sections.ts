export type MenuItem = {
    id: number
    name: string
    description: string
    price: string
    image: string
    tag?: string
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
                image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800",
                tag: "Café do Mané"
            },
            {
                id: 8,
                name: "Café do Mané – Clever",
                description: "Extração densa, corpo mais presente e sabor intenso.",
                price: "R$ 16,00",
                image: "/images/bebidas/café clever.jpeg",
                tag: "Café do Mané"
            },
            {
                id: 9,
                name: "Café do Mané – Prensa Francesa",
                description: "Café encorpado, doce e com textura amanteigada.",
                price: "R$ 18,00",
                image: "/images/bebidas/Expresso.jpg",
                tag: "Café do Mané"
            },
            {
                id: 10,
                name: "Café do Luiz Paulo – Coado V60",
                description: "Café especial acima de 85 pts · Mantiqueira · Grão Star Maya.",
                price: "R$ 20,00",
                image: "/images/bebidas/Expresso.jpg",
                tag: "Café do Luiz Paulo"
            },
            {
                id: 11,
                name: "Café do Luiz Paulo – Clever",
                description: "Extração com maior densidade e doçura marcante.",
                price: "R$ 20,00",
                image: "/images/bebidas/C'lever Luiz Paulo.jpeg",
                tag: "Café do Luiz Paulo"
            },
            {
                id: 12,
                name: "Café do Luiz Paulo – Prensa Francesa",
                description: "Café encorpado com notas doces e textura cremosa.",
                price: "R$ 22,00",
                image: "/images/bebidas/Prensa francesa Luiz Paulo.jpeg",
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
                image: "https://images.unsplash.com/photo-1507914372368-bd133b41fab5?w=800"
            },
            {
                id: 15,
                name: "Wolneyzão – Macchiatto G",
                description: "Versão grande com textura cremosa.",
                price: "R$ 16,00",
                image: "https://images.unsplash.com/photo-1507914372368-bd133b41fab5?w=800"
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
                image: "/images/bebidas/Juca.jpg"
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
                image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800"
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
                image: "/images/bebidas/Sandra.jpg"
            },
            {
                id: 29,
                name: "Frapê da Carol – Nutella",
                description: "Cremoso, doce e preparado com Nutella.",
                price: "R$ 29,00",
                image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800"
            },
            {
                id: 30,
                name: "Frapê do Felipe – Pistache",
                description: "Frapê artesanal de pistache.",
                price: "R$ 35,00",
                image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800"
            },
            {
                id: 31,
                name: "Gaby – Chá de Hibisco com Manga",
                description: "Infusão gelada com frutas tropicais.",
                price: "R$ 20,00",
                image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800"
            },
            {
                id: 32,
                name: "Gaby – Chá Mate com Limão",
                description: "Chá mate gelado com limão.",
                price: "R$ 16,00",
                image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800"
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
                image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800"
            },
            {
                id: 33,
                name: "Rafa – Smoothie Frutas Vermelhas",
                description: "Frutas vermelhas congeladas e batidas.",
                price: "R$ 32,00",
                image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800"
            },
            {
                id: 34,
                name: "Jade – Smoothie Doce de Leite com Paçoca",
                description: "Doce de leite com Paçoca, Leite Integral ou Vegetal.",
                price: "R$ 35,00",
                image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800"
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
                image: "/images/bebidas/kmais.jpeg"
            },
            {
                id: 36,
                name: "Suco do Gê – Maracujá com Capim Cidreira",
                description: "Refrescante e aromático.",
                price: "R$ 17,00",
                image: "https://images.unsplash.com/photo-1571049755112-47debb0a9a79?w=800"
            },
            {
                id: 37,
                name: "Tatha – Suco de Framboesa",
                description: "Suco natural de framboesa.",
                price: "R$ 28,00",
                image: "https://images.unsplash.com/photo-1571049755112-47debb0a9a79?w=800"
            },
            {
                id: 38,
                name: "Maria – Suco Detox",
                description: "Abacaxi, gengibre, couve, limão siciliano e cardamomo.",
                price: "R$ 24,00",
                image: "https://images.unsplash.com/photo-1571049755112-47debb0a9a79?w=800"
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
                image: "https://www.aguasantaines.com.br/wp-content/webp-express/webp-images/uploads/elementor/thumbs/garrafas-de-agua-mineral-santa-ines-rab1q2p4jzac8i9c5yjq5p56b9pnxdeqqvyg4epgxs.png.webp"
            },
            {
                id: 40,
                name: "Coca-Cola KS",
                description: "Garrafa KS.",
                price: "R$ 8,00",
                image: "https://cdn.vucasolution.com.br/upload/w_800/https://gryyplgyeyqb.compat.objectstorage.sa-saopaulo-1.oraclecloud.com/vuca-cdn/giggabar/arqs/produtos/gdxx6x4laqlsziljrjaz.jpg"
            },
            {
                id: 41,
                name: "Coca-Cola Zero KS",
                description: "Refrigerante zero açúcar (KS).",
                price: "R$ 8,00",
                image: "https://malte.agilecdn.com.br/189_1.jpg?v=353-2322567333"
            },
            {
                id: 42,
                name: "Guaraná",
                description: "Refrigerante gelado.",
                price: "R$ 8,00",
                image: "https://br.openfoodfacts.org/cgi/product_image.pl?code=7891991008761&imgid=3"
            },
            {
                id: 45,
                name: "Heineken",
                description: "Cerveja importada.",
                price: "R$ 14,00",
                image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800"
            },
            {
                id: 46,
                name: "Corona",
                description: "Cerveja importada.",
                price: "R$ 14,00",
                image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800"
            },
            {
                id: 47,
                name: "Stella Artois Purê Gold",
                description: "Cerveja sem glúten.",
                price: "R$ 14,00",
                image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800",
                tag: "SEM GLUTEN"
            },
            {
                id: 48,
                name: "Cerveja sem Álcool",
                description: "Cerveja sem álcool.",
                price: "R$ 17,00",
                image: "https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800"
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
                image: "https://images.unsplash.com/photo-1527169402691-feff5539e52c?w=800"
            },
            {
                id: 43,
                name: "Limoncello Spritz",
                description: "Drink cítrico preparado com limoncello.",
                price: "R$ 40,00",
                image: "https://images.unsplash.com/photo-1527169402691-feff5539e52c?w=800"
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
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
            },
            {
                id: 50,
                name: "Mariana – Croissant",
                description: "Acompanha geleia de frutas vermelhas, manteiga ou requeijão.",
                price: "R$ 22,00",
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
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
                image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800"
            },
            {
                id: 53,
                name: "Marina – Bauru",
                description: "Pão de longa fermentação recheado com mix de queijos, tomates assados e picles a parte.",
                price: "R$ 35,00",
                image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800"
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
                image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800"
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
                description: "Pão focaccia de fermentação natural, pesto de pistache, fatias finas de mortadela Ceratti, muçarela e rúcula selvática.",
                price: "R$ 52,00",
                image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800"
            },
            {
                id: 57,
                name: "Júlia",
                description: "Caprese - Pão focaccia de fermentação natural, pesto de manjericão, queijo, tomates assados e frescos com muçarela de búfala e rúcula selvática.",
                price: "R$ 45,00",
                image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800"
            },
            {
                id: 58,
                name: "Pedro",
                description: "Pão ciabatta de fermentação natural, maionese Dijon e mel, mignon empanado com fatias de queijo, tomate, picles de cebola roxa e rúcula selvática.",
                price: "R$ 49,00",
                image: "/images/Comidas/Pedro.jpg"
            },
            {
                id: 59,
                name: "Coda",
                description: "Sanduíche de pastrami em pão ciabatta de longa fermentação, queijo suíço, mostarda fermentada, picles de pepino e cebola roxa.",
                price: "R$ 52,00",
                image: "/images/Comidas/Coda.jpg"
            }
        ]
    },
    {
        id: "sonhos",
        title: "Sonhos",
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
                image: "/images/Comidas/Sonhos.jpeg"
            },
            {
                id: 63,
                name: "Doce de Leite",
                description: "Unidade",
                price: "R$ 18,00",
                image: "/images/Comidas/Sonhos.jpeg"
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
                name: "Croissant",
                description: "Unidade",
                price: "R$ 17,00",
                image: "/images/Comidas/Croissant.jpeg"
            },
            {
                id: 65,
                name: "Croissant de Amêndoas",
                description: "Unidade",
                price: "R$ 28,00",
                image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
            },
            {
                id: 66,
                name: "Pain au Chocolat",
                description: "Unidade",
                price: "R$ 24,00",
                image: "/images/Dodia/Pain au Chocolat.jpeg"
            },
            {
                id: 69,
                name: "Pastel de Nata",
                description: "Unidade",
                price: "R$ 15,00",
                image: "/images/Dodia/Pastel de nata.jpeg"
            }
        ]
    }
]

