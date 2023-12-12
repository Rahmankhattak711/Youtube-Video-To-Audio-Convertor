// api.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class FLService {
  async fetchData(): Promise<any> {
    const apiUrl =
      'https://flyinglanguages.com/search/vue/?accessible=false&ct=&home_lng=en-US&la_lst=&learning_lng=es-ES&ll_lst=&lt_lst=&search=';

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} - ${response.statusText}`,
      );
    }

    return response.json();
  }
}
