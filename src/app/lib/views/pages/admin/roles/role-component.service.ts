// import { Injectable } from '@angular/core';
// import { FormService } from 'src/app/lib/core/components/dynamic-inputs/core/form-control/form.service';
// import { IDynamicForm } from 'src/app/lib/core/components/dynamic-inputs/core';
// import { TranslationService } from 'src/app/lib/core/translator';
// import { FormRequest, DynamicFormHelpers } from 'src/app/lib/core/helpers/component-reactive-form-helpers';
// import { environment } from 'src/environments/environment';
// import { TypeUtilHelper } from '../../../../core/helpers/type-utils-helper';

// @Injectable()
// export class RoleComponentService {

//   private createRoleFormID = environment.forms.roles;

//   constructor(
//     private formService: FormService,
//     private translate: TranslationService,
//     public readonly typeHelper: TypeUtilHelper
//     ) { }


//   /**
//    * @description Returns a list of translation that can be use on the role component and it children
//    */
//   loadTranslations(): Promise<any> {
//     return this.translate.translate([
//       'invalidRequestParams',
//       'serverRequestFailed',
//       'successfulRequest'
//     ]).toPromise();
//   }

//   /**
//    * @description Load the create role form from the form and form controls providers
//    */
//   loadCreateRoleForm(): Promise<IDynamicForm> {
//     return new Promise((resolve, _) => {
//       this.formService.getForm(this.createRoleFormID).then(async (f) => {
//         resolve(await DynamicFormHelpers.buildDynamicForm(f, this.translate));
//       })
//         .catch((err) => { _(err); });
//     });
//   }

//   /**
//    * @description Add a new role to the data store
//    * @param formRequest [[FormRequest]]
//    */
//   public createRole(formRequest: FormRequest) {
//     // TODO : User Get role action handler
//     // return this.service.postRole(formRequest.requestURL, formRequest.body);
//   }

//   /**
//    * @description Get a given role by it id
//    * @param id [[number|string]]
//    */
//   public getRoleById(id: string|number) {

//     // TODO : Remove in order to get the role from the pagination state
//     // return this.service.getRole(id);
//   }

//   public updateRoleById(id: number|string, formRequest: FormRequest) {
//     // TODO : Replace with update  action
//     // return this.service.updateRole(formRequest.requestURL, id, formRequest.body);
//   }
// }
