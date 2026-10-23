# fdm

App para el celular para anotar gastos de todas tus cuentas (bancos, Mercado Pago,
efectivo) y llevar una lista de gastos planeados, así sabés cuánto te queda de verdad.
Es una página estática: los datos quedan guardados solo en el celular.
Los PDF se leen con [pdf.js](https://mozilla.github.io/pdf.js/) 3.11.174 (`pdf.min.js`, `pdf.worker.min.js`, licencia Apache 2.0) y las
capturas con [Tesseract.js](https://github.com/naptha/tesseract.js) 5.1.1 y los datos de
español `4.0.0_best_int` (carpeta `ocr/`, licencia Apache 2.0), todo dentro del celular.

- **Cuentas**: cada banco con su saldo. Los movimientos se importan de capturas de
  pantalla de la app del banco (para bancos que no dejan exportar, como Ualá), del
  resumen en PDF, de un CSV o pegando el texto copiado; no repite los que ya estaban.
  También se anotan a mano.
- **Gastos**: todos los movimientos, por mes, cuenta y categoría.
- **Planeados**: lo que todavía no pagaste. Se resta de lo que te queda y con
  "Ya lo pagué" pasa a Gastos (si se repite cada mes, queda para el mes siguiente).
- **Copia de seguridad**: guardá y cargá un archivo para cambiar de celular.

## Publicada en GitHub Pages

La app se publica sola desde la rama `main` (Settings → Pages → Deploy from a branch → `main` / `(root)`).
Cada cambio que se sube a `main` queda en línea en uno o dos minutos.
