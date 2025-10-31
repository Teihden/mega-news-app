import { http, delay, HttpResponse } from "msw";
import { PUBLIC_URLS } from "@shared/config/constants";
import type { INewsletterFormReq, INewsletterResp } from "@features/NewsletterForm";

export const handlers = [
  http.post<never, INewsletterFormReq, INewsletterResp>(PUBLIC_URLS.forms.newsletter, async ({ request }) => {
    await delay(1000);
    const formData = await request.formData();
    const email = formData.get("email");

    if (email === "test@test.com") {
      return HttpResponse.json({ status: 200, message: "MSW. Subscribed successfully" }, { status: 200 });
    }

    if (email === "error@test.com") {
      return HttpResponse.json({ status: 400, message: "MSW. Invalid email" }, { status: 400 });
    }

    return HttpResponse.json({ status: 500, message: "MSW. An error has occurred" }, { status: 500 });
  }),
];
