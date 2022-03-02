import { Component, OnInit } from "@angular/core";
import { RoutesMap } from "src/app/lib/views/partials/routes";

@Component({
  selector: "app-career-nav",
  template: `
    <app-sidebar
      [routesMap]="navbarRoutesMap"
      [routeDescriptions]="navbarRouteDefinitions"
    ></app-sidebar>
  `,
  styles: [],
})
export class AppCareerNavComponent implements OnInit {
  public navbarRoutesMap: RoutesMap[];
  public navbarRouteDefinitions: { [index: string]: string };

  public ngOnInit(): void {
    this.navbarRouteDefinitions = {
      navbar_employee_groups_header: "Gestion des employés",
      navbar_administration_managenents_header: "Administration",
      navbar_chart_managenents_header: "Organigramme",
      navbar_modules_management_header: "Gestion des modules",
      navbar_employees_management_list: "Liste employés",
      navbar_users_management_create: "Ajouter un utilisateur",

      navbar_roles_authorizations: "Roles & Authorizations",
      navbar_forms_create: "Créer un formulaire",
      navbar_salary_grid: "Grille de salaire",
      navbar_salary_class_options: "Classes & Catégories de salaires",
      navbar_modules_list: "Gestion des modules",
      navbar_modules_create: "Ajouter un nouveau module", //
      navbar_department_management_header: "Gestion des départements",
      navbar_department_list: "Gestion des départements",
      navbar_account: "Mon compte",
      navbar_personal_information: "Informations personnelles",
      navbar_cofigs: "Configurations",
      navbar_global_config: "Configurations globales",
      navbar_rtiei_configs: "Retraite par capitalisation",
      navbar_rc_configs: "Retraite complémentaire",
    };
    this.navbarRoutesMap = [
      // {
      //   key: 'navbar_employee_groups_header',
      //   routeIcon: 'users',
      //   children: [
      //     {
      //       key: 'navbar_employees_management_list',
      //       route: `/${defaultPath}/${adminPath.managementsRoute}/${adminPath.listUsersRoute}`
      //     },
      //     {
      //       key: 'navbar_roles_authorizations',
      //       route: `/${defaultPath}/${adminPath.managementsRoute}/${adminPath.rolesManagementRoute}`
      //     }
      //   ]
      // }
    ];
  }
}
