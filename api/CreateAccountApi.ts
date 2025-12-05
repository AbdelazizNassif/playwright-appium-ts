import { APIRequestContext, APIResponse } from '@playwright/test';

export class CreateAccountApi {
  constructor(private request: APIRequestContext) {}

  async createAccount(form: Record<string, any>): Promise<APIResponse> {
    return await this.request.post(process.env.BASE_URL + '/createAccount', {
      form,
    });
  }
}
