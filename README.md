# Examenfinal

1. Para la realización de este proyecto, se realizó primeramente la validación de las intalaciones de las herramientas a utilizar: nodejs, npm, angular-cli.

2. Una vez validado que todo esté OK, se creó un nuevo proyecto de angular:
ng new examenfinal

3. Se agregaron los Angular Materials:
ng add @angular/material

4. En el archivo app.component.html se dejó únicamente la linea del router outlet:
<router-outlet />

5. se crearon 2 componentes que fueron los utilizados en la aplicación:
ng generate component components/portfolio
ng generate component components/curriculumv

6. Se creó una interfaz la cual nos serviría para darle estilo a nuestra página portfolio
ng generate interface interfaces/tile

7. En el archivo app.routes.ts se confirugaron las rutas de la aplicación, así como una redirección

8. Se realizó el desarrollo de la aplicación, con ayuda de Angular Materials:
https://material.angular.io/components/table/overview

9. Se realizó la navegación entre las dos páginas de la aplicación (componentes) por medio de un botón

