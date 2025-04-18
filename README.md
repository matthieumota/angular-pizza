# Pizzaparty

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Login

- On doit pouvoir se connecter, il nous faut une page `/login` avec un composant `LoginComponent`.
- En bonus, on pourrait aller sur `/login/toto` et le formulaire sera pré rempli avec `toto`.

- Installer Tailwind
- Mettre en place un formulaire avec pseudo et mot de passe
- On intégrera ce formulaire avec le TDF (validation etc) => https://courses.boxydev.com/js/angular/les-formulaires.html
- La validation du formulaire enverra un POST vers /api/login
- https://courses.boxydev.com/js/angular/routing-angular.html#guard => nous pernmettra de faire un service pour savoir si l'utilisateur est connecté ou pas
