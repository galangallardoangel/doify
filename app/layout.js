import "./globals.css";

export const metadata = {
  title: "Doify | Organiza tus tareas",
  description:
    "Organiza tus proyectos y tareas con Doify. Un tablero Kanban sencillo para gestionar tu trabajo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
