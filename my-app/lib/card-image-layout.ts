/**
 * Layout centralizado para cards de produto.
 *
 * Estratégia (usada por iFood, Rappi, Starbucks app):
 *  - Container com aspect-ratio que minimiza crop real das fotos
 *  - object-cover garante zero espaço vazio
 *  - objectPosition por item permite ajuste fino do ponto focal
 *
 * As fotos deste projeto são majoritariamente retrato (celular vertical).
 * aspect-[3/4] no grid minimiza o crop para fotos retrato, enquanto
 * fotos paisagem perdem apenas ~15% das laterais.
 */

/** Grid / Menu do dia — retrato, minimiza crop em fotos verticais. */
export const GRID_IMAGE_ASPECT = "aspect-[3/4]"

/** Carrossel — retrato no mobile, mais largo no desktop. */
export const CAROUSEL_ASPECT = "aspect-[3/4] md:aspect-[4/3]"

/** Cards de destaque na home — mais largos, estilo hero. */
export const HERO_CARD_ASPECT = "aspect-[4/3]"

/** Posição focal padrão quando o item não define uma customizada. */
export const DEFAULT_IMAGE_POSITION = "center"
