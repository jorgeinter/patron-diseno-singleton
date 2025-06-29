// implementacion del patron de diseño Singleton para la conexión a la base de datos

class DatabaseConnection {
  // Propiedad estática para almacenar la instancia única de la conexión a la base de datos
  private static instance: DatabaseConnection;

  // Constructor privado para evitar la creación de instancias desde fuera de la clase
  private constructor() {
    // Inicializar la conexión a la base de datos
    console.log("Instancia de conexión a la base de datos creada.");
  }

  // metodo public para obtener la instancia única de la conexión a la base de datos
  public static getInstance(): DatabaseConnection {
    // Si la instancia no existe, crear una nueva
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    // Retornar la instancia única
    return DatabaseConnection.instance;
  }

  // Método para simular la conexión a la base de datos
  public connect(): void {
    // Lógica para conectar a la base de datos
    console.log("Conectando a la base de datos...");
  }
}

// ejemplo de uso del patrón Singleton
const dbConnection1 = DatabaseConnection.getInstance();
const dbConnection2 = DatabaseConnection.getInstance();
// Verificar que ambas instancias son la misma
console.log(dbConnection1 === dbConnection2); // true
// Conectar a la base de datos
dbConnection1.connect(); // Conectando a la base de datos...
dbConnection2.connect(); // Conectando a la base de datos...
