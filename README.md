The goal is to make a Transaction interceptor, so that any endpoint that utilizes the interceptor will have a database connection supplied to it. This database connection will be used by the request scoped
DAOs, so that every action is within a transaction and is safe!


make sure that we are only using typeorm to run migrations, but besides that we are going to want to use the raw query ability in our daos via a singular connection!
