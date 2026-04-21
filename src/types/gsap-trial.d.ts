declare module 'gsap/SplitText' {
  export default class SplitText {
    constructor(target: any, config?: any);
    chars: any[];
    words: any[];
    lines: any[];
    split(config?: any): void;
    revert(): void;
    static revert(): void;
  }
}

declare module 'gsap/ScrollSmoother' {
  export class ScrollSmoother {
    constructor(config?: any);
    static create(config?: any): ScrollSmoother;
    scrollTop(value?: number): number | ScrollSmoother;
    scrollLeft(value?: number): number | ScrollSmoother;
    paused(state?: boolean): boolean | ScrollSmoother;
    scrollTo(target: any, smooth?: boolean, position?: string): ScrollSmoother;
    kill(): void;
    static refresh(force?: boolean): void;
  }
}
