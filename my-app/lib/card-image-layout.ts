/**
 * Layout centralizado para cards de produto.
 *
 * object-cover + objectPosition por item para controle fino do crop.
 * Proporção 3:4 retrato nos grids (casa com as fotos verticais do restaurante).
 */

/** Grid / Menu do dia — retrato, minimiza crop em fotos verticais. */
export const GRID_IMAGE_ASPECT = "aspect-[3/4]"

/** Carrossel — retrato no mobile, paisagem no desktop. */
export const CAROUSEL_ASPECT = "aspect-[3/4] md:aspect-[4/3]"

/** Cards de destaque na home. */
export const HERO_CARD_ASPECT = "aspect-[4/3]"

/**
 * Posição focal padrão para food photography.
 * "50% 40%" aplica um leve bias superior — o sujeito principal
 * costuma ficar no terço de cima em fotos profissionais.
 * Override por item via `imagePosition` em menu-sections.ts.
 */
export const DEFAULT_IMAGE_POSITION = "50% 40%"
