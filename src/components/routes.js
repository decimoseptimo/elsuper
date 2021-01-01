/** Sidepanel routes */

//general
export const CATEGORIES = "categorias"
export const MY_ACCOUNT = "micuenta"
export const CART = "carrito"

//myAccount
export const PROFILE = "datos-personales"
export const ORDERS = "pedidos"
export const CARDS = "tarjetas"
export const ADDRESSES = "direcciones"
export const LOG_OUT = "cerrar-sesion"

//cart
export const SHIPPING = "envio"
export const PAYMENT = "pago"
export const PAY = "finalizar"

//other
export const AUTH = "identificate"
/** These routes are the only valid as sidepanels on layout (e.g. routes[0]). No more than one can be active at the same time */
export const MAIN_SIDEPANELS = [CATEGORIES, MY_ACCOUNT, CART]
