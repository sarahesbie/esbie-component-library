declare module 'styled-system' {
    // Define the main types for styled-system functions
    export function space(props: any): any;
    export function color(props: any): any;
    export function layout(props: any): any;
    export function typography(props: any): any;
    export function flexbox(props: any): any;
    export function border(props: any): any;
    export function background(props: any): any;
    export function position(props: any): any;
    export function grid(props: any): any;
  
    // Re-export any additional utilities you need
    export const compose: (...args: any[]) => any;
    export const system: (...args: any[]) => any;
    export const variant: (...args: any[]) => any;
  }
  