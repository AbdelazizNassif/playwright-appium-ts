import { APIRequestContext, APIResponse } from '@playwright/test';

export class VerifyLoginApi {
  constructor(private request: APIRequestContext) {}

  async verifyLogin(form: { email: string; password: string }): Promise<APIResponse> {
    return await this.request.post(process.env.BASE_URL + 'verifyLogin', {
      form,
    });
  }
}
