import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 */
@Pipe({ name: 'exponentialStrength' })
export class ExponentialStrengthPipe implements PipeTransform {
    transform(value: number, exponent: string): number {
        const exp = parseFloat(exponent);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    }
}
