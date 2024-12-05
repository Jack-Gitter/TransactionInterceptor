essentially the transaction provider is going to return a new instance of a DAO, and the connection that is passes into the constructor. 
it is up to the using classes to close the connection. The connection pool is used for the singleton instances of the DAO, so that it can utilize pooling!
one pool is shared across all daos, and the transaction manager.
