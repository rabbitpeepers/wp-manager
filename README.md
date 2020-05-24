# WP Manager

Admin panel for creating new WP instances.

## Folder structure

```shell
  /web - UI sources
  /app - API sources
  /bit-components - Bitdev shared components
```

## QUICK START

### APP SETUP

1. Create env from example.env.

```shell
cp app/.example-env app/.env
```

2. Setup Github
   - go to <https://github.com/organizations/${yourcompany}/settings/profile>
   - in organizations <https://github.com/organizations/${yourcompany}/settings/applications/new> register new App
   - set `application name` - put your name which can describe this app
   - set `Homepage URL` - put admin page url
   - set `APP_GITHUB_ORGANIZATIONS` as organization which you belong to.
   - set `Authorization callback URL` - for test setup - use `http://localhost:9000/auth/github/callback` in other cases use you domain
   - copy `Authorization callback URL` to the `app/.env`
   - change `APP_MONGODB_HOST` in the `app/.env` - to the your mongodb host instance (or use service name from the docker-compose file)
   - copy your Client ID to the `app/.env`
   - copy your Client Secret to the `app/.env`

### WEB SETUP

1. change `REACT_APP_API_URL` build argument to the proper APP url

### DOCKER-COMPOSE

run `docker-compose up --build`
