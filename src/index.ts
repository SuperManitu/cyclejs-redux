import xs, { Stream } from 'xstream';

export type reducer = (state : any, action : any) => any;

export function makeStateDriver(reducer : reducer, initialState : any) : (action$ : Stream<any>) => Stream<any>
{
    return (action$ : Stream<any>) => action$.fold(reducer, initialState);
}
