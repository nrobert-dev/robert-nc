export type Direction = 'x' | 'y';
export interface Animation{
    triggered : boolean,
    delay? : string
    direction? : Direction
}