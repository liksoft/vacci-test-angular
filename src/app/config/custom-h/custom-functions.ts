
/**
 * @description cette function renvoi les messages d'erreur lié aux post et put vers l'APi
 */

export const getFielsError = (a, b:String) =>   {

  let g = [];
  return g =  Object.entries(a).map(([k,v]) => {

    if(k == b ){
      return v[0] ;
    }

  });


}
