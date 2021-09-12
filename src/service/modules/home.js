import http from '../request';

// export function getInfo (params) {
//  return http({
//    method:'get',
//    url:'/api/v1/lists',
//    params
//  })
// }

export const getInfo = params =>{
  return http({
    method:'get',
    url:'/api/v1/lists',
    params
  })
}