import { IStringIndexSign } from "interfaces/global";
interface IRouteItem {
  key: string,
  path: string,
  component: any,

  exact?: boolean,
  routes?: IRouteItem[],
}

export default IRouteItem;


// 路由 histroy location
interface IPushParamObj {
  pathname: string,
  state: IStringIndexSign,
}
type IPushParam = IPushParamObj | string


export interface IHistory extends IRouteItem {
  location: ILocation,
  push: (path: IPushParam) => void,
  replace: (path: IPushParam) => void,
  go: (n: number) => void,
  goBack: () => void,
}

export interface ILocation {
  pathname: string,
  search: string,
  [key: string]: any
}

