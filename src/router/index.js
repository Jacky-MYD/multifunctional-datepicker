
const datePickerDemo = resolve => require(['../components/datePickerDemo/datePickerDemo'], resolve)

let routes = [
  {
    path: '/',
    name: 'datePickerDemo',
    component: datePickerDemo
  }
]

routes = routes.concat([{
  path: '*',
  redirect: '/'
}])
export default routes
