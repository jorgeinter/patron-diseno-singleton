// implementacion del patron de diseño Singleton para la conexión a la base de datos
var DatabaseConnection = /** @class */ (function () {
    // Constructor privado para evitar la creación de instancias desde fuera de la clase
    function DatabaseConnection() {
        // Inicializar la conexión a la base de datos
        console.log("Instancia de conexión a la base de datos creada.");
    }
    // metodo public para obtener la instancia única de la conexión a la base de datos
    DatabaseConnection.getInstance = function () {
        // Si la instancia no existe, crear una nueva
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        // Retornar la instancia única
        return DatabaseConnection.instance;
    };
    // Método para simular la conexión a la base de datos
    DatabaseConnection.prototype.connect = function () {
        // Lógica para conectar a la base de datos
        console.log("Conectando a la base de datos...");
    };
    return DatabaseConnection;
}());
// ejemplo de uso del patrón Singleton
var dbConnection1 = DatabaseConnection.getInstance();
var dbConnection2 = DatabaseConnection.getInstance();
// Verificar que ambas instancias son la misma
console.log(dbConnection1 === dbConnection2); // true
// Conectar a la base de datos
dbConnection1.connect(); // Conectando a la base de datos...
dbConnection2.connect(); // Conectando a la base de datos...
