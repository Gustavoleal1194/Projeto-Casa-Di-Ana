/**
 * Layout centralizado para cards de produto.
 *
 * object-cover + objectPosition por item para controle fino do crop.
 * Proporção 3:4 retrato nos grids (casa com as fotos verticais do restaurante).
 */

/** Grid / Menu do dia — quadrado (1:1), padrão iFood/Rappi para food cards. */
export const GRID_IMAGE_ASPECT = "aspect-square"

/** Carrossel — retrato no mobile, paisagem no desktop. */
export const CAROUSEL_ASPECT = "aspect-[3/4] md:aspect-[4/3]"

/** Cards de destaque na home. */
export const HERO_CARD_ASPECT = "aspect-[4/3]"

/**
 * Posição focal padrão para food photography.
 * "50% 40%" aplica um leve bias superior — o sujeito principal
 * (xícara, bolo, prato) costuma ficar no terço de cima em fotos profissionais.
 * Reduz drasticamente cortes ruins sem precisar configurar item a item.
 *
 * Override por item: defina `imagePosition` em cada MenuItem do menu-sections.ts
 * Exemplos:
 *   "center"         → centro perfeito (padrão antigo, bom para fotos simétricas)
 *   "50% 20%"        → puxa mais para o topo (drinks com espuma, cafés)
 *   "50% 60%"        → puxa para baixo (pratos com base mais interessante)
 *   "30% 40%"        → deslocado à esquerda + leve topo
 */
export const DEFAULT_IMAGE_POSITION = "50% 40%"
