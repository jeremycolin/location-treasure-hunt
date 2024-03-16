# Setup

## Postgres

1. Create treasure_hunts_db and if you do not have one already, create a superuser role for your local user

```shell
createdb treasure_hunts_db
sudo -u postgres psql
```

```sql
CREATE ROLE %USERNAME% SUPERUSER LOGIN;
```

2. Connect to treasure_hunts_db and create local_user

```shell
psql -U %USERNAME% -d treasure_hunts_db
```

In psql:

```sql
CREATE USER local_user WITH PASSWORD 'local_password';
GRANT CREATE ON SCHEMA public TO local_user;
```

### Populate database

curl -H "Content-Type: application/json" -X POST -d '{ "created_by": "jcolin", "name": "Berlin", "treasure_hunt": {}}' http://127.0.0.1:8080/treasure-hunts

# Run

pnpm run build && npm run start
