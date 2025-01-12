import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeElapsed'
})
export class TimeElapsedPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const timeDiff = new Date().getTime() - new Date(value).getTime();
    let diffInMin = Math.floor((timeDiff) / (60000));
    const mins = {
      day: 1440,
      week: 10080,
      hrs: 60
    }

    const keys = Object.keys(mins);
    for (let i = 0; i < keys.length; i++) {
      const passed = Math.floor(diffInMin / mins[keys[i]]);
      const key = passed > 1 ? keys[i]+'s' : keys[i]; 
      if (passed) {
        return `${passed} ${key} ago`;
      }
    }
    return `${diffInMin} minutes ago`;

  }

}
