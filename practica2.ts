interface Database{

  Connect(): void;
  Close(): void;
  Query(query: string): void;
 }



 class PostgreSQLDatabase implements Database{

public Connect():void{
    console.log("");
    
}

public Close (): void{
    console.log("");
    
}

public Query(query:string): void{
    console.log(`Hola, ${query}`);
    
}
 }
 class MongoDBDatabase implements Database{
public Connect():void{
    console.log("");
    
}

public Close (): void{
    console.log("");
    
}

public Query(query:string): any{
    console.log(`Hola, ${query}`);
    
}
 }
 abstract class DatabaseService {
constructor(protected database: Database){}
abstract fecthData(query: string): void;


 }
class ClientDatabaseService extends DatabaseService{
    public fecthData(query: string): void {
        this.database.Connect();
        this.database.Query(query);
        this.database.Close();

    }
}

 
// Client code

let postgreService = new ClientDatabaseService(new PostgreSQLDatabase());
postgreService.fecthData("User");