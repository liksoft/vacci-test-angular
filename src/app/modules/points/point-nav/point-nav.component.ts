import { Component, OnInit } from '@angular/core';
import { RoutesMap } from 'src/app/lib/views/partials/routes';
import { routeDefinitions } from '../../../config/partials-configs';



@Component({
  selector: 'app-point-nav',
  template: `
    <app-sidebar [routesMap]="navbarRoutesMap" [routeDescriptions]="navbarRouteDefinitions"></app-sidebar>
  `,

})
export class PointNavComponent implements OnInit {

  public navbarRoutesMap: RoutesMap[];
  public navbarRouteDefinitions: { [index: string]: string };

  constructor() { }

  ngOnInit(): void {
    this.navbarRouteDefinitions = {

      //mine
      navbar_articles_groups_header:'Articles',
      navbar_appointments_groups_header: 'Rendez-vous',
      navbar_centers_groups_header:'Centres',
      navbar_entries_groups_header :'Ravitaillements',
      navbar_articles_management_list: 'Liste des articles',
      navbar_entries_list:'Liste des entrées',
      navbar_points_management_list: 'Liste des centres',
      navbar_suppliers_config : 'Laboratoires',
      navbar_extern_app_config :'Sources Externes',
      navbar_grid_config:'Grille',
      navbar_timespan_config:'Intervalles de temps',
      navbar_tree_config:'Arbre',
      navbar_user_config:'Les utilisateurs',
      navbar_userprofil_config : 'Les profils utilisateurs' ,
      navbar_article_name_config : 'Les désignations de produits' ,
      navbar_permission_config : 'Les permissions' ,

      //not mine
      navbar_employee_groups_header: 'Gestion des employés',
      navbar_administration_managenents_header: 'Administration',
      navbar_chart_managenents_header: 'Organigramme',
      navbar_modules_management_header: 'Gestion des modules',
      navbar_employees_management_list: 'Liste employés',
      navbar_users_management_create: 'Ajouter un utilisateur',

      navbar_roles_authorizations: 'Roles & Authorizations',
      navbar_forms_create: 'Créer un formulaire',
      navbar_salary_grid: 'Grille de salaire',
      navbar_salary_class_options: 'Classes & Catégories de salaires',
      navbar_modules_list: 'Gestion des modules',
      navbar_modules_create: 'Ajouter un nouveau module', //
      navbar_department_management_header: 'Gestion des départements',
      navbar_department_list: 'Gestion des départements',
      navbar_account: 'Mon compte',
      navbar_personal_information: 'Informations personnelles',
      navbar_configs: 'Configurations',
      navbar_global_config: 'Configurations globales',
      navbar_rtiei_configs: 'Retraite par capitalisation',
      navbar_rc_configs: 'Retraite complémentaire'
    };
    this.navbarRoutesMap = [
      {
        key: 'navbar_appointments_groups_header',
        routeIcon: 'users',
        route: `${routeDefinitions.appointmentsRoute}/${routeDefinitions.listRoute}`,

      },
      {
        key: 'navbar_centers_groups_header',
        routeIcon: 'users',
        children: [
          {
            key: 'navbar_points_management_list',
            route: `${routeDefinitions.centersRoute}/${routeDefinitions.listRoute}`
          },
          {
            key: 'navbar_articles_management_list',
            route: `${routeDefinitions.centersRoute}/${routeDefinitions.articlesRoute}/${routeDefinitions.listRoute}`
          },
          {
            key: 'navbar_entries_list',
            route: `${routeDefinitions.centersRoute}/${routeDefinitions.listEntriesRoute}`
          }
        ]
      },
      {
        key: 'navbar_articles_groups_header',
        routeIcon: 'users',
        route: `${routeDefinitions.articlesRoute}/${routeDefinitions.listRoute}`,

      },

      {
        key: 'navbar_entries_groups_header',
        routeIcon: 'users',
        route: `${routeDefinitions.entriesRoute}/${routeDefinitions.listRoute}`,

      },

      // Configurations
      {
        key: 'navbar_configs',
        routeIcon: 'cog',
        children: [
          {
            key: 'navbar_suppliers_config',
            route: `${routeDefinitions.configurationsRoute}/${routeDefinitions.suppliersRoute}/${routeDefinitions.listRoute}`
          },
          {
            key: 'navbar_extern_app_config',
            route: `${routeDefinitions.configurationsRoute}/${routeDefinitions.extern_appsRoute}/${routeDefinitions.listRoute}`

          },
          {
            key: 'navbar_grid_config',
            route: `${routeDefinitions.configurationsRoute}/${routeDefinitions.gridsRoute}/${routeDefinitions.listRoute}`

          },
          {
            key: 'navbar_timespan_config',
            route: `${routeDefinitions.configurationsRoute}/${routeDefinitions.timespanRoute}/${routeDefinitions.listRoute}`

          }
          ,
          {
            key: 'navbar_tree_config',
            route: `${routeDefinitions.configurationsRoute}/${routeDefinitions.treeRoute}/${routeDefinitions.listRoute}`

          }
          ,
          {
            key: 'navbar_user_config',
            route: `${routeDefinitions.configurationsRoute}/${routeDefinitions.userRoute}/${routeDefinitions.listRoute}`

          },
          {
            key: 'navbar_userprofil_config',
            route: `${routeDefinitions.configurationsRoute}/${routeDefinitions.userprofilRoute}/${routeDefinitions.listRoute}`

          },
          {
            key: 'navbar_article_name_config',
            route: `${routeDefinitions.configurationsRoute}/${routeDefinitions.article_nameRoute}/${routeDefinitions.listRoute}`

          },
          {
            key: 'navbar_permission_config',
            route: `${routeDefinitions.configurationsRoute}/${routeDefinitions.permissionRoute}/${routeDefinitions.listRoute}`

          },
        ]
      },
      {
        key: 'navbar_account',
        routeIcon: 'info-standard',
        children: [
          {
            key: 'navbar_personal_information',
            route: `${routeDefinitions.accountRoute}`
          },
        ]
      }
    ];
    console.log('this.navbarRoutesMap');
    console.log(this.navbarRoutesMap);
  }

}
